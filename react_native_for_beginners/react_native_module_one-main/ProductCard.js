import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, Left, Body, Right } from 'native-base';
import Rating from './Rating';

export default function ProductCard(props) {

  return (
    <Card style={{flex: 0}}>
        <CardItem>
        <Left>            
            <Body>
            <Text>{props.data.productName}</Text>
            <Text note>{props.data.releasedDate}</Text>
            </Body>
        </Left>
        <Right>
            <Rating 
                rating={props.data.rating} 
            />     
        </Right>
        </CardItem>
        <CardItem>
        <Body>
            <Image source={{uri: props.data.imageUrl}} style={{height: 100, width: 100, flex: 1}}/>
            <Text>
            {props.data.description}
            </Text>
        </Body>
        </CardItem>
    </Card>      
  );   
}
