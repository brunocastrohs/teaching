import React, { useState } from 'react';
import Header from '../../containers/header';
import Section from '../../containers/section';
import Footer from '../../containers/footer';
import List from '../../components/list'
import Input from '../../components/input'
import './Welcome.css';

const Welcome = (props) => {
  
  const [sectionData, setSectionData] = useState(props.sectionData);

  const {title, footer_desc} = props;

  const sectionClassSearch = 'SectionSearch';
  
  const sectionClassData = 'SectionData';

  const inputLabel = 'Barra de pesquisa:';

  const filterList = (value) => {

    let data = null;

    if(value){

     data = sectionData.filter( 
      (user)=>{
        return user.name.includes(value);
      }
     ) 
 
    }else{
     data = props.sectionData;
    }

    setSectionData(data);

  }

  return (
        <div className="Welcome">
          <Header title={title}></Header>
          <Section className={sectionClassSearch}> <Input label={inputLabel} callback={filterList} /></Section>
          <Section className={sectionClassData}> <List data={sectionData}/> </Section>
          <Footer description={footer_desc}></Footer>
        </div>
  );
      
  

}

export default Welcome;