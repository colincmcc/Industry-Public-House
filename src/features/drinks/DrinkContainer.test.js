import React from 'react';
import { shallow } from 'enzyme';
import DrinkContainer from './DrinkContainer';

describe('DrinkContainer', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<DrinkContainer debug />);

    expect(component).toMatchSnapshot();
  });
});
