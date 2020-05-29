import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-shallow-renderer'; 
import Survey from '../Routes/Survey';

test('should render header correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Survey />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
})



