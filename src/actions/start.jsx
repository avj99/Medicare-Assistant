import React, { useEffect } from 'react';
import { Text, Button } from '@botonic/react';
import { searchDocuments } from './cognitive_search';

export default class extends React.Component {
  static async botonicInit(request) {
    const name = request.session.user.name;
    return { name };
  }

  render() {
    return (
      <>
        <Text>
          You can ask questions about your plan or select one of the frequenly
          asked questions below:
          <Button payload="faq-language">
            What do I need to pay for Insulin or blood pressure medications? Are
            they in my Formulary?
          </Button>
          <Button payload="faq-question">
            What is my monthly plan premium?
          </Button>
          <Button payload="faq-question">
            What is my deductible cost for an in network or out of network
            providers?
          </Button>
        </Text>
      </>
    );
  }
}
