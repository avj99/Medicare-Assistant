import { Button, Text } from '@botonic/react';
import React from 'react';
import styled from 'styled-components';
import { WebchatContext } from '@botonic/react';

export default class extends React.Component {
  static async botonicInit(request) {
    const question = request.input.data;
    const formulary_match = question && question.match(/formulary|medication/i);

    return { question, formulary_match };
  }

  render() {
    return (
      <>
        {this.props.formulary_match ? (
          <Text>
            Aetna Medicare Value Plan (HMO) (H8332-002) has an annual deductible
            of $150 for drug plan. This plan has 5 drug tiers and the
            cost-sharing during the initial coverage phase for preferred
            pharmacy is $0.00 for Tier 1 and Tier 2 drugs, $47.00 for Tier 3
            drugs, $100.00 for Tier 4 drugs and 30% for Tier 5 drugs. You will
            not pay more than $35 for a one-month supply of each insulin product
            covered by our plan, no matter what cost-sharing tier it is on, even
            if your plan has a deductible that you have not paid
            <Button url="https://www.aetnamedicare.com/en/prescription-drugs/find-pharmacy.html">
              Find a Pharmacy
            </Button>
          </Text>
        ) : (
          <Button url="https://www.aetnamedicare.com/en/find-doctors-hospitals/find-provider.html">
            Find a Doctor
          </Button>
        )}
      </>
    );
  }
}
