import { CustomHeader } from './custom-header'
import { CustomTrigger } from './custom-trigger'
import { CustomPersistentMenu } from './custom-persistentMenu'
import { CustomSendButton, CustomMenuButton } from './custom-icons'
import { CustomButton } from './custom-button'
import CustomCover from './cover-component'
import Logo from '../assets/aetna-icon.png'

export const webchat = {
  storage: sessionStorage,
  storageKey: 'your-medicare-assistant',
  coverComponent: CustomCover,

  theme: {
    mobileBreakpoint: 460,
    style: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      width: 400,
      height: 600,
      margin: 'auto',
      backgroundColor: 'white',
      borderRadius: 8,
      boxShadow: '0 0 50px #C1CED7',
      overflow: 'hidden',
      fontFamily: 'Arial',
      lineHeight: 1.3,
    },

    message: {
     
      bot: {
        image: Logo,
        imageStyle: {
          alignItems: 'flex-start',
        },
        style: {
          color: '#000000',
          background: '#ffffff',
          borderRadius: '5px',
          border: '1px solid #495e86',
          borderColor: '#495e86',
        },
        blobTickStyle: {
          alignItems: 'flex-start',
        },
      },
      user: {
        style: {
          color: '#ffffff',
          borderRadius: '5px',
          background: '#495e86',
        },
      },
      timestamps: {
        format: () => {
          return new Date().toISOString().substring(11, 16)
        },
        style: {
          color: 'black',
          fontFamily: 'Arial',
          fontSize: '12px',
          padding: '1px 16px 0px 50px',
          height: '30px',
          marginTop: '-5px',
        },
      },
    },

    userInput: {
      style: {
        background: 'white',
        minHeight: '45px',
      },
      box: {
        style: {
          border: 'none',
          color: 'black',
          background: 'white',
          paddingLeft: 20,
          marginRight: 10,
        },
        placeholder: 'Write a message...',
      },

      menu: {
        darkBackground: true,
        custom: CustomPersistentMenu,
      },
    },

    customTrigger: CustomTrigger,
    customHeader: CustomHeader,
    customButton: CustomButton,
    customMenuButton: CustomMenuButton,
    customSendButton: CustomSendButton,
  },
}
