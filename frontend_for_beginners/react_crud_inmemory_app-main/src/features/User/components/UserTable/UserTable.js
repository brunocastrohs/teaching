
import React from 'react'

/**
  Este componente visa receber um arranjo de dados via props,
  iterar os dados arranjo via função map estruturando-os em uma tabela.
  props também traz consigo dois callbacks: um para acionar a lógica
  de edição; e outro para acionar a lógica de remoção.
   */

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props?.users?.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button className="button muted-button" onClick={() => {props.editRow(user)}}>Edit</button> 
              <button className="button muted-button"   onClick={() => props.deleteUser(user.id)} >Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable