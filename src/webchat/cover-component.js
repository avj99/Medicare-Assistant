import React from 'react'
import styled from 'styled-components'
import { WebchatContext } from '@botonic/react'
import { Text, Button } from '@botonic/react'

export default class CustomCover extends React.Component {
  static contextType = WebchatContext
  constructor(props) {
    super(props)
    this.state = {
      contractid: 'H8332',
      pbp: '002',
      error: false,
    }
  }

  close() {
      this.context.sendText('Start')
      this.props.closeComponent()
  }

  render() {
    return (
      <>
        <Text>
          Hi! I am Hailey, your virtual assistance. I am here to help you on your
          health care journey.
        </Text>
        <Button onClick={() => this.close()}>
            Start My Health Care Journey
          </Button>  
      </>
    )
  }
}
