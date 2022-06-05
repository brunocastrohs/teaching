import React from 'react';
import './List.css';

const List = (props) => {
  
    return (
        <div className="flex-row">
          {props?.data?.map((item, index) => (
          <div className="flex-large" key={index}>
            <h3>📖 {item.name}</h3>
            <h5>👥 {item.authors.join(', ')}</h5>
            <h5><a href={item.url} target='_blank' rel="noreferrer">〰️ {item.url}</a></h5>
          </div>
          ))}
        </div>
      );
  
}

export default List;
