import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from './Button';

describe('button', () => {
  it('should match snapshot', () => {
    const { container } = render(<Button>BUTTON</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should render button component', () => {
    const { getByRole } = render(<Button>BUTTON</Button>);
    const button =  getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should call onClick on button click', () => {
    const clickFn = jest.fn();
    const { getByRole } = render(<Button onClick={clickFn}>BUTTON</Button>);
    const button = getByRole('button');
    button.click();
    expect(clickFn).toHaveBeenCalled();
  });
});
