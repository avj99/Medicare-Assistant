import { SearchClient, AzureKeyCredential } from '@azure/search-documents';
const endpoint = 'https://your-search-service.search.windows.net';
const apiKey = 'your-api-key';
const indexName = 'your-index-name';

export async function searchDocuments(query) {
  const credential = new AzureKeyCredential(apiKey);
  const client = new SearchClient(endpoint, indexName, credential);

  const searchResults = await client.search(query);
  const searchHits = searchResults.results;

  // Process the searchHits as needed to extract relevant information
  // For example, retrieve the top matching document and its fields

  return searchHits;
}
