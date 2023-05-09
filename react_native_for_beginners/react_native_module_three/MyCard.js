import React from 'react';
import { Content, Card, CardItem, Body, Text } from 'native-base';

export default function MyCard(props) {
  
  return (
    <Content>
        <Card>
            <CardItem>
            <Body>
                <Text>
                {props.children}
                </Text>
            </Body>
            </CardItem>
        </Card>
    </Content>
  );
}
