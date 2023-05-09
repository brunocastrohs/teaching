import React, {useState} from 'react';
import { Content, Form, Item, Input, Button, Text, Badge } from 'native-base';

export default function MyForm() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")    
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")        

  const handleSubmit = () => {
    var emailValid = false;
    if(email.length == 0){
        setEmailError("Email is required");
    }        
    else if(email.length < 6){
        setEmailError("Email should be minimum 6 characters");
    }      
    else if(email.indexOf(' ') >= 0){        
        setEmailError('Email cannot contain spaces');                          
    }    
    else{
        setEmailError("")
        emailValid = true
    }

    var passwordValid = false;
    if(password.length == 0){
        setPasswordError("Password is required");
    }        
    else if(password.length < 6){
        setPasswordError("Password should be minimum 6 characters");
    }      
    else if(password.indexOf(' ') >= 0){        
        setPasswordError('Password cannot contain spaces');                          
    }    
    else{
        setPasswordError("")
        passwordValid = true
    }        

    if(emailValid && passwordValid){            
        alert('Email: ' + email + '\nPassword: ' + password); 
        setEmail("");
        setPassword("");
    }        

  }

  return (
    <Content>
        <Form>
            <Item>
                <Input placeholder="Enter Email" onChangeText={text => setEmail(text)} value={email}/>
            </Item>
            {emailError.length > 0 &&
            <Badge danger>
                  <Text>{emailError}</Text>
            </Badge>}            
            <Item last>
                <Input placeholder="Enter Password" onChangeText={text => setPassword(text)} value={password}/>
            </Item>  
            {passwordError.length > 0 &&
            <Badge danger>
                  <Text>{passwordError}</Text>
            </Badge>}                                  
            <Item>
                <Text></Text>
            </Item>
            <Button onPress={handleSubmit}>
                <Text>Submit</Text>
            </Button>                    
        </Form>

        <Text>
            Email entered: {email}            
        </Text>
        <Text>            
            Password entered: {password}
        </Text>        

    </Content>
  );
}
