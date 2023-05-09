import React, { useContext, useState } from 'react'
import { TodosContext } from './App'
import { SwipeListView } from 'react-native-swipe-list-view';
import { Text, Container, Header, Item, Input, Button } from 'native-base';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import uuid from 'uuid-random';

export default function ToDoList({navigation}) {
    const {state, dispatch} = useContext(TodosContext); 
    const [todoText, setTodoText] = useState("")    
    const buttonTitle = "Add";

    const handleSubmit = () =>{
        const newToDo = {id: uuid(), text: todoText};
        dispatch({type: 'add', payload: newToDo});
        setTodoText('');        
    }

    const renderItem = data => (
        <View style={styles.rowFront}>
            <Text>{data.item.text}</Text>
        </View>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity onPress={() => editRow(data.item, rowMap)}>
                <Text>Edit</Text>
            </TouchableOpacity>  
            <TouchableOpacity
                style={[styles.backRightBtn]}
                onPress={() => deleteRow(data.item)}                
            >
                <Text style={{color: '#FFF'}}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    const deleteRow = (todo) => {
        dispatch({type:'delete',payload:todo});
    };

    const editRow = (todo,rowMap) => {        
        if (rowMap[todo.id]) {
            rowMap[todo.id].closeRow();
        }        
        navigation.navigate('ToDoDetail', todo)             
    };

    return (
        <Container> 
            <Header searchBar>
                <Item>                
                    <Input 
                        placeholder="Enter Todo" 
                        onChangeText={text => setTodoText(text)} 
                        value={todoText} 
                    />                
                </Item>
                <Button transparent onPress={handleSubmit}>
                    <Text>{buttonTitle}</Text>
                </Button>                      
            </Header>           

            <SwipeListView
                data={state.todos}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-75}
            />          
        </Container>
    );
}

const styles = StyleSheet.create({
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderBottomWidth: 0.25,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        backgroundColor: 'red',
        right: 0
    }
});
