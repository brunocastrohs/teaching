import React, { useState } from 'react'

const AddUserForm = (props) => {

  //Definição de um atributo que recebe um JSON o qual
  //irá orientar o controle dos campos do formulário de
  //adição de users.
  const [user, setUser] = useState(props.initialFormState);

  //Captura os dados digitados nos campos do form.
  const handleInputChange = (event) => {
    //event é um objeto JS que traz todos os dados
    //relativos ao evento tratado. event.target retorna
    //especificamente o objeto que disparou o evento em
    //seu estado corrente. Via desestruturação,
    //são acessados de target apenas o atributo name
    // e o atributo value de event.target.
    const { name, value } = event.target
  
    //via spread, atualiza apenas a chave igual ao valor de 'name' do JSON
    //referenciado em user. Assim, temos que user[name] = value.
    setUser({ ...user, [name]: value })
  }


  return (
    <form onSubmit={event => {
      event.preventDefault()
      if (!user.name || !user.username) return
  
      props.addUser(user)
      setUser(props.initialFormState)
    }}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      {/*Na maioria dos browsers, um button é por padrão do tipo submit (type = 'submit')*/}
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm;