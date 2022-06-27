import { render } from '@testing-library/react';

import App from './App';
import { hasText, matchSnapshot } from '../helpers/testing'

test('renders app template', () => {
  render(<App />);

  hasText('React - TypeScript - Tailwind Starter Kit')
  matchSnapshot(<App />)
});
