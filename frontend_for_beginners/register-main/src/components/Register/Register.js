
import './Register.css';
import { useEffect } from "react";
import FieldSet from './components/FieldSet';
import { sendRequest, produceBody} from '../../utils';

function Register() {

  let keyId = 0;
  
  const handleClick = ()=>{

    const squad = document.querySelector('#squad');
    const members_name = document.querySelectorAll('.member_name');
    const members_id = document.querySelectorAll('.member_id');
    const members_email = document.querySelectorAll('.member_email');
    const members_role = document.querySelectorAll('.member_role');
    const members_institution = document.querySelectorAll('.member_institution');
    const members_enrollment = document.querySelectorAll('.member_enrollment');
    const moment = new Date().toString();

    const body = produceBody(squad,members_name,members_id,members_email,members_role,members_institution,members_enrollment, moment);

    const uri = "https://firestore.googleapis.com/v1/projects/cybercamp-fyb/databases/(default)/documents/registration/";

    const method = "POST";

    sendRequest(body, uri, method);
    
  }

  useEffect(
    ()=>{
      localStorage.setItem(`USER`, null);
    },[]
  );
  

  return (
    <div className="Register">
      
        <main className="container">
        <div className="py-5 text-center">
          <img className="d-block mx-auto mb-4" src="/fyt/img/logo.png" alt="" width="396" height="160"/>
          <h2>Cybercamp Fit Your Thinking</h2>
          <p className="lead">Neste formulário, você poderá registrar os dados de cada membro da sua equipe e submete-los para o cybercamp <strong>Fit Your Thinking</strong>.</p>
        </div>

        <div className="row">
          
          <div className="col-lg-12">
            
            <h4 className="mb-3">Dados da sua equipe</h4>
            
            <form className="needs-validation" id='squad_registration' noValidate>
              <div className="row g-3">
                
                <div className="col-12">
                  <label htmlFor="squad" className="form-label">Como se chamará seu time</label>
                  <div className="input-group has-validation">
                    <input type="text" className="form-control" id="squad" placeholder="" required/>
                    <div className="invalid-feedback">
                      O nome da equipe é obrigatório.
                    </div>
                  </div>
                </div>

                <hr className="my-4"/>


                <FieldSet title='Dados do head da equipe' isRequired={true} keyId={++keyId}/>

                <FieldSet title='Dados do segundo membro' isRequired={true} keyId={++keyId}/>

                <FieldSet title='Dados do terceiro membro' isRequired={true} keyId={++keyId}/>

                <FieldSet title='Dados do quarto membro' isRequired={true} keyId={++keyId}/>

                <FieldSet title='Dados do quinto membro' isRequired={false} keyId={++keyId}/>

                <FieldSet title='Dados do sexto membro' isRequired={false} keyId={++keyId}/>

              </div>

              <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleClick}>Submeter inscrição</button>

            </form>
          </div>
        </div>
      </main>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2015–2022 FitBank Pagamento S/A</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="https://fitbank.com.br/">Privacidade</a></li>
          <li className="list-inline-item"><a href="https://fitbank.com.br/">Termos</a></li>
          <li className="list-inline-item"><a href="https://fitbank.com.br/">Suporte</a></li>
        </ul>
      </footer>
    </div>
  );
}

//formValidationObserver();

export default Register;
