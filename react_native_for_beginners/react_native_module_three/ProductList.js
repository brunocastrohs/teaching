import React from 'react';
import { Content, H1 } from 'native-base';
import ProductCard from './ProductCard';

export default function ProductList() {

    const getProducts = () => {
        return [/*
        { 
            imageUrl: "http://loremflickr.com/150/150?random=1",
            productName: "Product 1",
            releasedDate: "May 31, 2016",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
            rating: 4,
            numOfReviews: 2
        },
        { 
            imageUrl: "http://loremflickr.com/150/150?random=2",
            productName: "Product 2",
            releasedDate: "October 31, 2016",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
            rating: 2,
            numOfReviews: 12          
        },
        { 
            imageUrl: "http://loremflickr.com/150/150?random=3",
            productName: "Product 3",
            releasedDate: "July 30, 2016",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
            rating: 5,
            numOfReviews: 2
        }*/];
      };  

    const products = getProducts();
        
    const listProducts = products.map((product) => 
        <ProductCard key={product.productName} data={product} />
    );    
    
  
    return (    
        <Content>
            {listProducts.length > 0 ? ( 
                <Content>{listProducts}</Content>     
            ) : (         
            <H1>No Products to display</H1>     
            )} 
          
        </Content>    
    );
}
