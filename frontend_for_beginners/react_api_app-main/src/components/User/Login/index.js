import React, { useState } from "react";
import UserDataService from "../../../services/User/index";
import {TOKEN_KEY} from "../../../services/shared/api";

const Login = props => {

  /**
    Atribuição de um JSON ao atributo 'user'
    do componente Login. Este JSON abstrai os
    atributos de UserResource no Web Service
    para garantir a interoperabilidade..
   */

  const [user, setUser] = useState({ id: null, login: "", password: ""});

  /**
    Definição de uma função para tratar (handle) 
    a ação de alteração do valor de um input.
    Via atribuição por desestruturação, é
    possível atribuir uma chave e seu valor
    a duas variáveis homônimas com o event.target.
    Utilizamos ainda o operador spread para
    atribuir corretamente ao atributo 'user'
    a respectiva relação de nome de chave e 
    valor.
   */
  
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  /**
    Definição de uma função para submeter
    as credenciais de login e obter um JWT
    junto ao Web Service, usando para tal,
    a interface (arranjo de métodos) UserDataService.
    Obs: Se você não entendeu por que me referi
    a UserDataService como interface, sugiro
    estudar por que chamamos de interface de uma classe
    os seus respectivos métodos.
   */

  const sendLogin = () => {
    var data = {
      login: user.login,
      password: user.password
    };

    UserDataService.login(data)
      .then(response => {
        localStorage.setItem(TOKEN_KEY, response.data?.result?.token);
        console.log(TOKEN_KEY+": "+localStorage.getItem(TOKEN_KEY));
        props.history.push("/category");
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  /**
    Definição do JSX
    que irá dar forma visual e operacional
    ao componente Login.
   */
  return (
  <div>
    
          <div className="form-group">
            <label htmlFor="name">Login</label>
            <input
              type="text"
              className="form-control"
              id="login"
              required
              value={user.login}
              onChange={handleInputChange}
              name="login"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              value={user.password}
              onChange={handleInputChange}
              name="password"
            />
          </div>          

          <button onClick={sendLogin} className="btn btn-success">
            Submit
          </button>
        
  </div>
);

};

export default Login;