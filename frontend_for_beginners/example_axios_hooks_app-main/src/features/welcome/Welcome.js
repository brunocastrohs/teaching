import React, {useEffect, useState} from 'react';
import Header from '../../containers/Header';
import Section from '../../containers/Section';
import Footer from '../../containers/Footer';
import List from '../../components/List'
import Input from '../../components/Input'
import api from '../../_config/api';
import './Welcome.css';

const Welcome = (props) => {
  
  const [sectionData, setSectionData] = useState(props.sectionData);

  const {title, footer_desc} = props;
  
  const inputLabel = 'Barra de pesquisa:';

  const filterList = (value)=>{

    fetchData(value);

  }
  
  const fetchData = async (value) => {

    const response = await api.get('/books?name='+value)

    setSectionData(response?.data)
    
  }

  useEffect(

    () => {
      fetchData('');
    },
    []
  );

  return (
        <div className="container">
          <Header title={title}></Header>
          <Section> <Input label={inputLabel} callback={filterList} /></Section>
          <Section> <List data={sectionData}/> </Section>
          <Footer description={footer_desc}></Footer>
        </div>
      );
   

}

export default Welcome;