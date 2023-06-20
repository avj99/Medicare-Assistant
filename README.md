# Your Medicare Assistant

By leveraging the power of Microsoft Azure and Python's Scrapy library, I have efficiently scraped and collected valuable data from the renowned healthcare insurance company, Aetna Healthcare. This comprehensive dataset forms the foundation of my application, ensuring up-to-date and accurate information.
The user interface, built with React and JavaScript, offers a seamless and intuitive experience. Gone are the days of endlessly navigating through complex websites with numerous tabs and overwhelming information. Instead, users can engage with my AI bot, designed to answer dynamic questions promptly.
Whether users need details about coverage options, premium rates, or specific policy details, my AI bot provides personalized responses based on their inquiries. The conversational nature of the bot ensures a natural interaction, as it adapts to user needs, preferences, and queries.

Say goodbye to the frustration of searching for specific healthcare insurance information. Experience a streamlined approach with my application, where an AI bot stands ready to assist you, simplifying the complexities of healthcare insurance and providing the answers you need, instantly.


**What's in this project?**

- [How to use this app](#how-to-use-this-app)
- [Webchat components](#webchat-components)
  - [1. Cover Component](#1-cover-component) - Greeting and Start CTA
  - [2. Custom Messages](#2-custom-messages)
  - [2.1 Custom Message from bot](#21-custom-message-from-bot)
  - [2.2 Custom Message from user](#22-custom-message-from-user)
  - [3. Persistent Menu](#3-persistent-menu)
- [Actions components](#actions)
  - [1. Ask Question](#1-ask-question) - Action used for custom questions handeling
  - [2. FAQ Question](#1-faq-question) - Action used for FAQ questions handeling
- [Routes components](#routes)
  - [1. Routes](#1-routes) - All routing rules

## How to setup and run this app

Ensure node v12.22.12 or greater is installed on your local machine.

1. From your command line, download the ymcra project from github bpabilonia/ymcra repository by running:
2. `cd` into `ymcra` directory that has been created.
3. Run `npm install` to download all the node modules dependencies on your local machine.
3. Run `npm audit fix` to fix all the node modules dependencies on your local machine.
3. Run `botonic serve` or `npx @botonic/cli serve` to test it in your local machine.



