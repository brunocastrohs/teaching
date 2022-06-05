import { render, fireEvent } from '@testing-library/react';
import {myStore} from '../../_config/redux'
import Welcome from './Welcome';
import {Provider} from 'react-redux';

describe('Testing <Welcome>', function () {

  test('Test h1', () => {
    const {container} = render(<Provider store={myStore}><Welcome/></Provider>);
    const element = container.querySelector('h1');
    expect(element?.innerHTML).toBe(process.env.REACT_APP_TITLE);
  });

  test('Test redux', async () => {
    const {container} = render(<Provider store={myStore}><Welcome/></Provider>);
    const input = container.querySelector('.Input')?.querySelector('input');
    const button = container.querySelector('.Input')?.querySelector('button');
    
    const value = 'A Game Of Thrones';

    if(input){
        fireEvent.change(input, {target:{value:value}});
    }
    
    if(button)
      await fireEvent.click(button); //.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    
    const span = container.querySelector('.List')?.querySelector('span');
    
    expect(span?.innerHTML).toBe(value); 
  });

});
