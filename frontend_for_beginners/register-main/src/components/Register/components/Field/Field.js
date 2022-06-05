
import { FieldHelper } from "../../../../utils";
import {useState} from 'react';

function Field(props) {

    const {label, keyId, feedbackMessage, className, data, type} = props;
    const [isRequired, setIsRequired] = useState(props.isRequired);

    const handleChange = (e) => {
      if(e.target.value!=='' && keyId> 4){
        setIsRequired(true);
      }
    }

    const genereateInput = () =>{
        return (
            <div className="col-12">
                <label className="form-label">{label}</label>
                <div className="input-group has-validation">
                  {/*<span className="input-group-text">@</span>*/}
                  {isRequired? 
                  (<input  type="text" className={className+" form-control"} placeholder="" required/>):
                  (<input onChange={handleChange}  type="text" className={className+" form-control"} placeholder=""/>)}
                  <div className="invalid-feedback">
                    {feedbackMessage}
                  </div>
                </div>
              </div>
        ) ;
    }

    const genereateSelect = () =>{
        return (
            
            <div className="col-9">
                <label htmlFor="" className="form-label">{label}</label>
                {isRequired? 
                  (<select className={className+" form-select"} id="" required>{genereateOptions()}</select>):
                  (<select onChange={handleChange} className={className+" form-select"} id="">{genereateOptions()}</select>)}
                <div className="invalid-feedback">
                {feedbackMessage}
                </div>
              </div>
        ) ;
    }

    const genereateOptions = () =>{
        
        return data && data.length>0?data.map(
            (element, key) => <option key={key} value={element.value}>{element.label}</option>
        ):<option key={0} value=''></option>;
    }
  
    return (type===FieldHelper.INPUT?(genereateInput()):(genereateSelect()));

  }
  
  export default Field;
  