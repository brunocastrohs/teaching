import {useEffect, useState} from 'react';
import './List.css';
import api from '../../_config/axios'
import {useSelector } from 'react-redux'

const List = () => {
  
    const searchTerm = useSelector(state => state);

    const [data, setData] = useState([]);

    useEffect(()=>{
      
      const fetchData = async () => {

        const response = await api.get('/books?name='+searchTerm)
      
        setData(response?.data);
  
      }

      fetchData();

    },[searchTerm]);

    return (
        <div className="row List">
          <span className='invisible'>{searchTerm}</span>
          {data?.map((item:any, index:number) => (
          <div className="card m-1 w-25" key={index}>
            <div className="card-body">
              <h5 className="card-title">📖 {item.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">👥 {item.authors.join(', ')}</h6>  
              <p className="card-text">Algum texto de exemplo rápido para mostrar o título do card e compor a maior parte do conteúdo do card.</p>
              <a href={item.url} target="_blank" rel="noreferrer" className="card-link">Link do livro</a>
              <a href="http://localhost:3000/" target="_blank" rel="noreferrer" className="card-link">Link da editora</a>
            </div>
          </div>
          ))}
        </div>
      );
  
}

export default List;
