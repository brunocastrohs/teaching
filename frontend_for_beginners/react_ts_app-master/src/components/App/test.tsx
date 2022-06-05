import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import App from "./index";

describe('App', function () {
   it('Deve renderizar o título da aplicação corretamento', function () {
       let container = document.createElement('div');
       document.body.appendChild(container);
       act(() => {
           ReactDOM.render(<App/>, container);
       })
       const header = container.querySelector('h1');
       expect(header?.textContent).toBe("My Hacker Stories")
   });
});

