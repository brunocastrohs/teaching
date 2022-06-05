import React, { useState, useEffect } from "react";
import CategoryDataService from "../../../services/Category/index";
import { Link } from "react-router-dom";
import "./style.css";

const List = () => {

  /**
    definição dos atributos que irão abstrair o estado do componente List.
   */

  const [categorys, setCategorys] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");

  /**
    A lógica deste hook foi explicada na apostila e no componente Edit.
    A sua aplicação neste componente é a de fazer com que retrieveCategorys
    seja executado toda vez que List seja montado na UI da aplicação. Como 
    o segundo parâmetro foi definido com um array vazio, o useEffect
    não irá re-executar retrieveCategorys a cada mutação de List.
   */

  useEffect(() => {
    retrieveCategorys();
  }, []);

  /**
    Fornece lógica para tratar a mudança de valoração
    capturada do input e passada para o atributo searchName.
    Lembre-se que a cada execução desta função, alteramos o estado
    do componente.
   */

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  /**
    Lógica de consumo do endpoint GetAll Categories.
   */

  const retrieveCategorys = () => {
    CategoryDataService.getAll()
      .then(response => {
        setCategorys(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  /**
    Lógica para tratar a lógica de interação do usuário para com a lista
    de componentes, preparando a UI para habilitar a capacidade de o usuário
    editar ou deletar uma categoria.
   */

  const setActiveCategory = (category, index) => {
    setCurrentCategory(category);
    setCurrentIndex(index);
  };

  /**
    Lógica para tratar filtragem da lista de categorias consumindo o endpoint
    encapsulado em CategoryDataService.findByName.
   */

  const findByName = () => {

    if(searchName !== ''){
    CategoryDataService.findByName(searchName)
      .then(response => {
        setCategorys(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }else{
      retrieveCategorys();
    }
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Categorys List</h4>

        <ul className="list-group">
          {categorys &&
            categorys.map((category, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                style={{cursor:'pointer'}}
                onClick={() => setActiveCategory(category, index)}
                key={index}
              >
                {category.name}
              </li>
            ))}
        </ul>

        
      </div>
      <div className="col-md-6">
        {currentCategory ? (
          <div>
            <h4>Category</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentCategory.name}
            </div>
            
            <Link
              to={"/category/" + currentCategory.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Category...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;