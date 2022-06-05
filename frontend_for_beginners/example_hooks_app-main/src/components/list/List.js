import React from 'react';
import './List.css';

const List = (props) => {

    return (
        <div className="List">
          {props?.data.map((item, index) => (
          <div className="Item" key={index}>
            <h3>{item.name}</h3>
            <p>{item.location}</p>
            <p>{item.car}</p>
          </div>
          ))}
        </div>
      );
      
}

export default List;
