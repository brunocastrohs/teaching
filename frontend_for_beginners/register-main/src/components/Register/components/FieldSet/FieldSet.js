import Field from "../Field";
import { FieldHelper, memberRoles, memberInstitutions } from "../../../../utils";


function FieldSet(props) {

  const isRequired = props.isRequired;

  const keyId = props.keyId;

  return (
    <>
    <h4 className="mb-3">{props.title}</h4>
            
            <Field keyId={keyId} isRequired={isRequired}  label='Nome Completo' feedbackMessage= 'Informar o nome completo é obrigatório.' className='member_name' type={FieldHelper.INPUT}/>
            
            <Field keyId={keyId} isRequired={isRequired} label='CPF' feedbackMessage= 'Informar o CPF é obrigatório.' className='member_id' type={FieldHelper.INPUT}/>
            
            <Field keyId={keyId} isRequired={isRequired} label='E-mail' feedbackMessage= 'Informar um e-mail válido é obrigatório.' className='member_email' type={FieldHelper.INPUT}/>

            <Field keyId={keyId} isRequired={isRequired} data={memberRoles} label='Papel no time' feedbackMessage= 'Informar o papel do membro é obrigatório.' className='member_role' type={FieldHelper.SELECT} />

           
            <Field keyId={keyId} isRequired={isRequired}  data={memberInstitutions} label='Instituição de ensino' feedbackMessage= 'Informar uma instituição é obrigatório.' className='member_institution' type={FieldHelper.SELECT}/>

            <Field keyId={keyId} isRequired={isRequired} label='Matricula' feedbackMessage= 'Informar a matrícula do membro junto a instituição é obrigatório.' className='member_enrollment' type={FieldHelper.INPUT}/>
            <hr className="my-4"/>
    </>

  );
}

export default FieldSet;
