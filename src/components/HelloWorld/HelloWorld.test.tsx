import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { HelloWorld } from './HelloWorld';

test('renders a message', () => {
  const { getByText } = render(<HelloWorld />);
  const tree = renderer.create(<HelloWorld />).toJSON();
  expect(getByText('Hello, World!')).toBeInTheDocument();
  expect(tree).toMatchSnapshot();
});
