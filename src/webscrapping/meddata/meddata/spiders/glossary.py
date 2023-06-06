import scrapy
import json
import os
from azure.search.documents import SearchClient
from azure.core.credentials import AzureKeyCredential

class FaqSpider(scrapy.Spider):
    name = 'faq'
    start_urls = ['https://www.aetnamedicare.com/en/faq/questions-choosing-medicare-plan.html']

    def parse(self, response):
        # Extract the questions
        questions = response.xpath('//button[contains(@id, "link_content_section_accordion_copy_copy")]/text()').getall()

        # Extract the answers
        answers = response.xpath('//div[@class="content_wrapper"]//div[@class="text aem-GridColumn aem-GridColumn--default--12"]/div[@class="rte-component-wraper component--default "]/p/text()').getall()

        # Yield each question and answer as a JSON object
        for question, answer in zip(questions, answers):
            item = {
                'question': question.strip(),
                'answer': answer.strip()
            }
            yield item
            filename = 'faq.json'
            filepath = os.path.join(os.getcwd(), 'meddata', 'json_data', filename)
            with open(filepath, 'a') as file:  # Use 'a' to append instead of 'w' to overwrite
                file.write(json.dumps(item) + '\n')  # Write the item as a JSON string and add a newline character