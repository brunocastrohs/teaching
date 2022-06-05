import React, { useState } from "react";
import CategoryDataService from "../../../services/Category/index";

const Add = () => {
  

  /**
    Definição do JSON com as definições do
    estado inicial do componente Add.
   */
  
  const initialCategoryState = {id: null, name: ""};

  /**
    Atribuição de um JSON ao atributo 'category'
    do componente Add. Este JSON abstrai os
    atributos de CategoryResource do Web Service
    para garantir a interoperabilidade.
   */

  const [category, setCategory] = useState(initialCategoryState);

  /**
    submitted é um atributo utilizado para suportar
    a manipulação da renderização seletiva deste 
    componente.
   */

  const [submitted, setSubmitted] = useState(false);

  /**
    Mesma lógica já descrita no componente User/Login.
   */

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };


  /**
    Função com a especificação da lógica de envio 
    de dados para salvar uma categoria junto ao Web 
    Service.
   */

  const saveCategory = () => {
    var data = {
      name: category.name
    };

    CategoryDataService.create(data)
      .then(response => {
        setCategory({
          id: response.data.id,
          name: response.data.name
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  /**
    Função a ser ativada após um
    save bem sucedido de categoria.
    Reseta o componente para o seu estado
    inicial, de tal forma
    que a renderização seletiva
    possa montar novamente o 
    formulário de save de categoria.
   */

  const newCategory = () => {
    setCategory(initialCategoryState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCategory}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={category.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <button onClick={saveCategory} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Add;