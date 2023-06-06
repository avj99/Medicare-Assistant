import { Text } from '@botonic/react';
import React from 'react';
import { SearchClient, AzureKeyCredential } from '@azure/search-documents';

const endpoint = 'https://medicare.search.windows.net';
const api_key = 'SEAIQeqKgmhSIpwHE4gIdgktMe1eQrniJPMMNWzmKVAzSeCLgRTk';
const index_name = 'faq';

const credential = new AzureKeyCredential(api_key);
const searchClient = new SearchClient(endpoint, index_name, credential);

export default class extends React.Component {
  static async botonicInit(request) {
    const question = request.input.data;

    // Execute search query to find matching documents
    const searchResponse = await searchClient.search(question);
    const searchResults = searchResponse.results.map(
      (result) => result.document
    );

    let formularyMatch = false;
    let keywords = [];

    // Check if any search result contains matching keywords
    for (const result of searchResults) {
      const documentQuestion = result.questions;

      // Split the document question into individual words
      const documentKeywords = documentQuestion.toLowerCase().split(' ');

      // Check if any word from the document question is present in the user's question
      const matchedKeywords = documentKeywords.filter((keyword) =>
        question.toLowerCase().includes(keyword)
      );

      if (matchedKeywords.length > 0) {
        formularyMatch = true;
        keywords = matchedKeywords;
        break;
      }
    }

    return { question, formularyMatch, keywords };
  }
}
