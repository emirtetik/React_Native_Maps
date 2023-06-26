import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import App from './App';

test('should match with snapshot', () => {
  const comp = render(<App />);
  expect(comp).toMatchSnapshot()
});

test('should add item to list', () => {
  const comp = render(<App />);

  const input = comp.getByTestId('Change-text');
  fireEvent.changeText(input, 'test element');

  const submitButton = comp.getByTestId('touchable-button');
  fireEvent.press(submitButton);

  const list = comp.getByTestId('list').props;
  expect(list.data.length).toBe(1);
});


test('should add item for multiple times', () => { 

    const comp = render(<App />);

    const input = comp.getByTestId("Change-text")
  fireEvent.changeText(input, 'test element');

   const submitButton = comp.getByTestId("touchable-button");
   fireEvent.press(submitButton)
   fireEvent.press(submitButton)
   fireEvent.press(submitButton)

   const list = comp.getByTestId('list').props;
  expect(list.data.length).toBe(3);
 })


 
// test('should not add item if input are empty ', () => { 

//     const comp = render(<App />);


//    const submitButton = comp.getByTestId("touchable-button");
//    fireEvent.press(submitButton)

//    const list = comp.getByTestId('list').props;
//   expect(list.data.length).toBe(0);
//  })