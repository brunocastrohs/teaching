import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {

  //A lógica desse componente é semelhante ao de AddUserForm. As diferenças são:
  //1. Emprega-se o useEffect para atualizar do JSON de user, o qual controla o formulário, toda
  //vez que há mudança de props. Isso permite que sempre que o form seja renderizado,
  //ele apresente os dados sempre atualizado com os dados do novo currente user.
  //2. Ao clicar no button 'Cancel', o callback setEdting é acionada para indicar desativação do modo de edição. 

  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])  

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
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
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm;