import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-shallow-renderer'; 
import Footer from '../Navigation/Footer';

test('should render header correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Footer />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
})



