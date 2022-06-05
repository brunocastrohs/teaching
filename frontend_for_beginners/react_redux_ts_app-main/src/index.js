import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import {myStore} from './_config/redux'
import Welcome from './features/Welcome/';
import {Provider} from 'react-redux';

ReactDOM.render(
  //referência myStore para que a árvore de componentes tenha acesso a mesma via Provider. 
  <Provider store={myStore}>
    <Welcome/>
  </Provider>,
  document.getElementById('root')
);