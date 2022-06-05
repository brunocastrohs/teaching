import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import List from "./index";

const stories = [
  {
    objectID: 0,
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4
  },
  {
    objectID: 1,
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
  },
];

describe('List', function () {
   it('Deve renderizar os títulos como Redux ou React', function () {
       let container = document.createElement('div');
       document.body.appendChild(container);
       act(() => {
           ReactDOM.render(
            <List list={stories}/>, container);
       })
       const item = container.querySelector('a');
       expect(item?.textContent == "Redux" || item?.textContent == "React").toBeTruthy();
   });
});

