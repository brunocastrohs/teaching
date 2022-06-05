import './Welcome.css';
import { useEffect } from "react";
import { useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Welcome() {

  let navigate = useNavigate();

  useEffect(
    ()=>{
      localStorage.setItem('USER', null);
    },[]
  );

  const handleClick = () => {
    const auth = getAuth();
    document.querySelector('.alert').style.display=`none`;
      signInWithEmailAndPassword(auth, localStorage.getItem('USER'), localStorage.getItem('PASS'))
        .then((userCredential) => {
          navigate("/store");
          localStorage.setItem(`CRED`,userCredential)
        })
        .catch((error) => {
            document.querySelector(`.alert`).style.display=`inherit`;
            console.log(error)
        });


  }

  return (
    <section className="h-100 gradient-form Welcome">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">
                      <img src="/fyt/img/logo.png" alt="logo"/>
                      <h4 className="mt-1 mb-5 pb-1">Cybercamp Fit Your Business</h4>
                    </div>

                    <form>
                      <p>Use suas credenciais para acessar o repositório de inscrições.</p>

                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example11" onChange={(e)=>{localStorage.setItem(`USER`,e.target.value)}} className="form-control" placeholder="Digite seu e-mail"/>
                        
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example22" onChange={(e)=>{localStorage.setItem(`PASS`,e.target.value)}} className="form-control" placeholder="Digite sua senha"/>
                        
                      </div>

                      <div className="form-outline mb-4">
                      <button className="btn btn-block btn-primary gradient-custom-2" onClick={handleClick} type="button">Log in</button>
                      </div>

                      <br/>

                      <div className="alert alert-danger" role="alert">
                       Credencias inválidas.
                      </div>

                    </form>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">O Cybercamp</h4>
                    <p className="small mb-0">O Fit Your Thinking é um programa de parceria que visa a criação de soluções inovadoras para aperfeiçoar a área dos meios de pagamentos digitais. Por meio do certame, serão dadas às equipes condições para que elas possam desenvolver um software de aplicação web que se traduza em uma plataforma bancária ou uma Application Programming Interface (API) de serviços bancários.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  );
}

export default Welcome;
