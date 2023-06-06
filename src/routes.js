import Start from './actions/start'
import AskQuestion from './actions/ask-question'
import FAQQuestion from './actions/faq-question'

export const routes = [
  { path: 'start', text: /^start$/i, action: Start },
  { path: 'faq-question', payload: /faq-.*/, action: FAQQuestion },
  { path: 'ask-question', type: /^.*$/, action: AskQuestion },
]
