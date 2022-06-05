import React, { useState, useEffect } from "react";
import CategoryDataService from "../../../services/Category/index";

const Edit = props => {
  
  /**
    initialCategoryState tem o mesmo efeito semântico daquele explicado 
    para initialCategoryState no componente Add.
   */

  const initialCategoryState = {
    id: null,
    name: ""
  };

  /**
   Definição dos atributos (e valoração inicial) que irão abstrair o estado do
   componente por meio do hook useState.
   */

  const [currentCategory, setCurrentCategory] = useState(initialCategoryState);
  const [message, setMessage] = useState("");

  /**
   getCategory implementa lógica de recuperação de dados
   de uma categoria. Recuperados os dados de um registro
   de categoria, esse são utilizados para popular
   os campos do formulário implementado no componente Edit.
   */

  const getCategory = id => {
    CategoryDataService.get(id)
      .then(response => {
        setCurrentCategory(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  /** 
   O hook useEffect recebe como parâmetro uma definição de uma função anônima 
   ou um ponteiro para uma função. A função passada como primeiro parâmetro será
   executada logo após a primeira renderização do componente e toda vez que o respectivo componente
   sofre uma mutação, seja por modificação de props ou state.
   Este hook prevê ainda um segundo argumento em forma de array de variáveis. 
   Se você definir o segundo argumento, o useEffect só executará a função passada no primeiro parâmetro se as variáveis
   do definidas no segundo parâmetro deste hooks sofra uma alteração.
   O emprego do useEffect neste componente segue a seguinte lógica: execute getCategory
   após a primeira renderização do componente Edit. Como definimos o segundo parâmetro
   para este hook, a lógica é incrementada da seguinte forma: re-execute getCategory toda
   vez que Edit receber um 'id' diferente via props.match.params.
   Lembre-se que match faz referência a URL corrente e match.params
   ao parâmetros definidos na URL. Falei sobre isso na apostila de React Hooks.
  */

  useEffect(() => {
    getCategory(props.match.params.id);
  }, [props.match.params.id]);

  /**
    Mesma lógica já descrita no componente User/Login.
   */

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCategory({ ...currentCategory, [name]: value });
  };

  /**
    Implementa a lógica de execução de um endpoint PUT Category com o Web Service.
   */

  const updateCategory = () => {
    CategoryDataService.update(currentCategory.id, currentCategory)
      .then(response => {
        console.log(response.data);
        setMessage("The category was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  /**
    Implementa a lógica de execução de um endpoint DELETE Category com o Web Service.
   */

  const deleteCategory = () => {
    CategoryDataService.remove(currentCategory.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/category");
      })
      .catch(e => {
        console.log(e);
      });
  };

  /**
   Renderização seletiva do componente com base 
   nos valores de currentCategory. Se os atributos
   de currentCategory não estão vazios, a expressão
   relacional {currentCategory ? (1) : (2)}
   executa o bloco 1, caso contrário, o bloco 2 é 
   executado. Caso não tenha compreendido,
   expliquei sobre renderização seletiva na 
   apostila de React Hooks. Pesquise também
   sobre o operador relacional ternário do JS.
   */

  return (
    <div>
    {currentCategory ? (
      <div className="edit-form">
        <h4>Category</h4>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={currentCategory.name}
              onChange={handleInputChange}
            />
          </div>
        </form>

        <button className="badge badge-danger mr-2" onClick={deleteCategory}>
          Delete
        </button>

        <button
          type="submit"
          className="badge badge-success"
          onClick={updateCategory}
        >
          Update
        </button>
        <p>{message}</p>
      </div>
    ) : (
      <div>
        <br />
        <p>Please click on a Category...</p>
      </div>
    )}
  </div>
);

};

export default Edit;