import React from 'react';
import UserContainer from './container';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';

const User = () => {

  return (
    <div className='full-container'>
      <Header/>
      <UserContainer/>
      <Footer/>
    </div>
  )

}

export default User;