import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DrinkContainer from './DrinkContainer';

describe('DrinkContainer', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<DrinkContainer debug />);

    expect(component).toMatchSnapshot();
  });
});

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <DrinkContainer page="http://www.facebook.com">Facebook</DrinkContainer>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
