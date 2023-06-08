import { Text } from '@botonic/react';
import React from 'react';
import { SearchClient, AzureKeyCredential } from '@azure/search-documents';

const endpoint = 'https://medicare.search.windows.net';
const apiKey = 'SEAIQeqKgmhSIpwHE4gIdgktMe1eQrniJPMMNWzmKVAzSeCLgRTk';
const indexName = 'faq';

const credential = new AzureKeyCredential(apiKey);
const searchClient = new SearchClient(endpoint, indexName, credential);

export default class extends React.Component {
  static async botonicInit(request) {
    const question = request.input.data;

    // Create the search options
    const searchOptions = {
      includeTotalCount: true,
      select: ['questions', 'answers'],
    };

    // Perform the search query
    const searchResults = await searchClient.search(question, searchOptions);

    let firstAnswer = ''; // Initialize firstAnswer variable

    // Iterate through the search results
    for await (const result of searchResults.results) {
      const { questions, answers } = result.document;

      // Check if the first answer is empty and assign the value
      if (!firstAnswer && answers) {
        firstAnswer = answers;
      }

      // You can also break the loop if you only want the first answer
      break;
    }

    return { question, firstAnswer };
  }

  render() {
    const { firstAnswer } = this.props;

    return (
      <>
        {firstAnswer ? (
          <Text>{firstAnswer}</Text>
        ) : (
          <Text>No results found</Text>
        )}
      </>
    );
  }
}
