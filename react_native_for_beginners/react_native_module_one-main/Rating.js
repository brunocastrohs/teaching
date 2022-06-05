import React, { useState } from 'react';
import { TouchableWithoutFeedback } from "react-native";
import { H1, Icon } from 'native-base';
import { Row } from 'react-native-easy-grid';

export default function Rating(props) {

    const [rating, setRating] = useState(props.rating)

    return ( 
        <Row>      
            <H1>Rating: {rating}</H1>           
            
            {rating >= 1 ? ( 
                <TouchableWithoutFeedback onPress={() => setRating(1)}>
                    <Icon type="FontAwesome" name="star" style={styles.starStyle} />
                </TouchableWithoutFeedback>
            ) : (         
                <TouchableWithoutFeedback onPress={() => setRating(1)}>
                    <Icon type="FontAwesome" name="star-o" style={styles.starStyle} />   
                </TouchableWithoutFeedback>            
            )}  
            {rating >= 2 ? ( 
                <TouchableWithoutFeedback onPress={() => setRating(2)}>
                    <Icon type="FontAwesome" name="star" style={styles.starStyle} />
                </TouchableWithoutFeedback>
            ) : (         
                <TouchableWithoutFeedback onPress={() => setRating(2)}>
                    <Icon type="FontAwesome" name="star-o" style={styles.starStyle} />   
                </TouchableWithoutFeedback>         
            )}  
            {rating >= 3 ? ( 
                <TouchableWithoutFeedback onPress={() => setRating(3)}>
                    <Icon type="FontAwesome" name="star" style={styles.starStyle} />
                </TouchableWithoutFeedback>        
            ) : (         
                <TouchableWithoutFeedback onPress={() => setRating(3)}>
                    <Icon type="FontAwesome" name="star-o" style={styles.starStyle} />   
                </TouchableWithoutFeedback>         
            )}  
            {rating >= 4 ? ( 
                <TouchableWithoutFeedback onPress={() => setRating(4)}>
                    <Icon type="FontAwesome" name="star" style={styles.starStyle} />
                </TouchableWithoutFeedback>
            ) : (         
                <TouchableWithoutFeedback onPress={() => setRating(4)}>
                    <Icon type="FontAwesome" name="star-o" style={styles.starStyle} />   
                </TouchableWithoutFeedback>         
            )}  
            {rating >= 5 ? ( 
                <TouchableWithoutFeedback onPress={() => setRating(5)}>
                    <Icon type="FontAwesome" name="star" style={styles.starStyle} />
                </TouchableWithoutFeedback>        
            ) : (         
                <TouchableWithoutFeedback onPress={() => setRating(5)}>
                    <Icon type="FontAwesome" name="star-o" style={styles.starStyle} />   
                </TouchableWithoutFeedback>         
            )}                                            
        </Row>
      );    
}

const styles={
    starStyle:{
      color: 'orange'    
    }
  }
  
