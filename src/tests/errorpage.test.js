import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-shallow-renderer'; 
import ErrorPage from '../Routes/ErrorPage';

test('should render header correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<ErrorPage />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
})



