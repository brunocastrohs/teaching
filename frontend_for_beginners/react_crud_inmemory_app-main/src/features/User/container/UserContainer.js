import React, {useState} from 'react';
import UserTable from '../components/UserTable';
import AddUserForm from '../components/AddUserForm';
import EditUserForm from '../components/EditUserForm';
import './UserContainer.css';

const UserContainer = () => {

  //Objeto mock.
  const usersData = [
    { id: 1, name: 'Juca', username: 'jucadiskette' },
    { id: 2, name: 'John', username: 'johndolon' },
    { id: 3, name: 'Mary', username: 'marysphere' },
  ];

  //Arranjo de atributos da entidade 'usuário' que orienta
  //o controle dos formulários.
  const initialFormState = { id: null, name: '', username: '' }

  //Define o atributo user, um vetor, com o objeto mock.
  const [users, setUsers] = useState(usersData);

  //Orienta a UI para exibir o form Create (C) ou form Update.
  const [editing, setEditing] = useState(false);

  //Guarda os dados do 'user' selecionados para edição (update).
  const [currentUser, setCurrentUser] = useState(initialFormState);

  //Funções que dispõe da lógica de inserção de um user. É passada
  //como callback para AddUserForm.
  const addUser = (user) => {
    //Cálcula o valor do id de uma nova instância de user.
    user.id = users.length + 1;
    //A instrução [...users, user] cria um novo vetor, espalha (spread ...) os valores já persistidos em
    //'users' neste novo vetor e adiciona ainda o objeto 'user' ao final deste vetor. A instrução
    //setUsers([...users, user]) atualiza o estado de UserContainer.users.
    setUsers([...users, user]);
  }

  //Funções que dispõe da lógica de remoção de um user. É passada
  //como callback para UserTable.
  const deleteUser = (id) => {
    //Filtra a lista de tal forma que a instância de user contida na lista com id
    //igual ao recebido como parâmetro seja descartada.
    //O método filter retorna uma copia filtrada do arranjo preliminar. 
    setUsers(users.filter((user) => user.id !== id))
  }

  
  const editRow = (user) => {
    //Seta o atributo que orienta a edição como verdadeiro, indicando que a edição vai começar.
    setEditing(true);
    //Prepara os dados para edição.
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  }

  //Funções que dispõe da lógica de edição de um user. É passada
  //como callback para UserTable.
  const updateUser = (id, updatedUser) => {
    //Seta o atributo que orienta a edição como falso, indicando que a edição foi concluída.
    setEditing(false);
    //Atualiza os dados da tupla na tabela de users. 
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>User Feature</h1>
      <div className="flex-row">
      <div className="flex-large">
        {
        //Renderização seletiva que operacionaliza o aspecto de adição ou edição de um 'user'
        editing ? (
          <div>
            <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm initialFormState={initialFormState} addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  )

}

export default UserContainer;