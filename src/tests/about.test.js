import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-shallow-renderer'; 
import AboutUs from '../Routes/AboutUs';

test('should render header correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<AboutUs />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
})



