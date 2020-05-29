import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-shallow-renderer'; 
import HeaderBox from '../Components/HeaderBox';

test('should render header correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<HeaderBox />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
})




