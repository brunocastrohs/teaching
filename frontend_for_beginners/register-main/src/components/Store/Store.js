import "./Store.css";
import { useNavigate } from 'react-router';
import { useState, useEffect, useRef } from "react";
import { db } from "../../config/firebase";
import {
  collection,
  getDocs
} from "firebase/firestore";
import {formatDate} from "../../utils";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Search from "./components/Search";
import Exporter from "./components/Exporter";


function Store() {
  
  const [registrations, setRegistrations] = useState([]);

  const [readOnlyRegistrations, setReadOnlyRegistrations] = useState([]);

  const StorePreloadRef = useRef();

  const StoreSizeRef = useRef();

  let navigate = useNavigate();

  const handleMemberData = (name, email) =>{
    return name!==''?
    (<ul><li>👽 {name}</li><li>📧 {email}</li></ul>)
    :
    (<ul><li>👽 --</li><li>📧 --</li></ul>);

  }

  const handleSearch=(value)=>{
    if(value==='')
     setRegistrations(readOnlyRegistrations);
    else
      setRegistrations( registrations.filter( 
        (registration)=>{
          return registration.squad.includes(value);
        }
      ) );
  }
  
  useEffect(() => {

    if(localStorage.getItem('USER')==='null')
      navigate("/");
    else{
      const auth = getAuth();
      
      signInWithEmailAndPassword(auth, localStorage.getItem('USER'), localStorage.getItem('PASS'))
        .then((userCredential) => {
          localStorage.setItem(`CRED`,userCredential);
        })
        .catch((error) => {
            console.log(error);
        });

      const getRegistrations = async () => {
      
          const registrationsStore = collection(db, "registration");
          const data = await getDocs(registrationsStore);
          setRegistrations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          setReadOnlyRegistrations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          StorePreloadRef.current.style.display='none';
          StoreSizeRef.current.style.display='block';

      };

      try{
        getRegistrations();
      }catch(error){
        navigate("/");
        alert(`Sua sessão expirou. Faça login novamente para continuar.`);
      }

    }

  }, [navigate]);

  return (
    <div className="Store">

      <div className="StoreBar navbar">

        <img className='StoreBarLogo' src='img/logo_min.png' alt='logo'/>

        <Exporter data={registrations}/>

        <Search callback={handleSearch}/>


      </div>

      <div className="StoreContent row">

      <div ref={StorePreloadRef} className='StorePreload'>Carregando dados. Aguarde...</div>

      {registrations.map((registration, key) => {
        return (

          <div className="card" key={key}>
          <div className="card-body">
            <h4 className="card-title">Equipe: {registration.squad}</h4>
            
            <h4 className="card-quantity">Inscritos: {registration.number}</h4>
            <hr/>
            <h5 className="card-member">Membros</h5>
            
            <div className="card-members">
              {handleMemberData(registration.head_name, registration.head_email)}
              {handleMemberData(registration.member_two_name, registration.member_two_email)}
              {handleMemberData(registration.member_three_name, registration.member_three_email)}
              {handleMemberData(registration.member_four_name, registration.member_four_email)}
              {handleMemberData(registration.member_five_name, registration.member_five_email)}
              {handleMemberData(registration.member_six_name, registration.member_six_email)}
            </div>
 
            <hr/>

            <h5 className="card-member">Data da inscrição: {registration.moment !== null? formatDate(new Date(registration.moment)):''}</h5>
            

            </div>
          </div>
          
          
        );
      })}

      <div ref={StoreSizeRef} className='StoreSize'>
        <hr/>
        Você está visualizando os dados de {registrations.length} equipe{registrations.length>1?'s':''}.
      </div>

      </div>

      
    </div>
  );
}

export default Store;
