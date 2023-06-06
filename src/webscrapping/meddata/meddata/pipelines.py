from azure.search.documents import SearchClient
from azure.core.credentials import AzureKeyCredential
import requests
import json
import os
import base64
class MyscraperPipeline:
    def __init__(self):
        endpoint = "https://medicare.search.windows.net"
        api_key = "SEAIQeqKgmhSIpwHE4gIdgktMe1eQrniJPMMNWzmKVAzSeCLgRTk"
        index_name = "faq"

        credential = AzureKeyCredential(api_key)
        self.client = SearchClient(endpoint=endpoint, index_name=index_name, credential=credential)
    
    
    def process_item(self, item, spider):
        
        filename = 'faq.json'
        filepath = os.path.join(os.path.dirname(__file__), 'json_data', 'faq.json')

        
        with open(filepath, 'r') as file:
                    for line in file:
                        data = json.loads(line)
                        
                        document_key = data["question"]
                        encoded_key = base64.urlsafe_b64encode(document_key.encode("utf-8")).decode("utf-8")

                        document = {
                            "id": encoded_key,  # Use the encoded key as the document ID
                            "questions": data["question"],
                            "answers": data["answer"],
                        }
                        
                        self.client.upload_documents([document])
                
        return item

