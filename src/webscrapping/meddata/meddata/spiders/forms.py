import scrapy



class FormSpider(scrapy.Spider):
    name = 'pdf_forms'
    start_urls = ['https://www.aetnamedicare.com/en/contact-us/print-forms.html']

    def parse(self, response):
        form_rows = response.css('div.component__cta')
        for row in form_rows:
            form_url = row.css('a.link__digitaldownload').get()

            yield {
                'Form URL': form_url
            }
