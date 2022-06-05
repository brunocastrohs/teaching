import React, {Component} from 'react';
import Header from '../../containers/header';
import Section from '../../containers/section';
import Footer from '../../containers/footer';
import List from '../../components/list'
import Input from '../../components/input'
import api from '../../_config/api';
import './Welcome.css';

class Welcome extends Component {
  
  constructor(props){
    super(props);
    this.state = {sectionData:props.sectionData}
    this.filterList = this.filterList.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  filterList(value){

    this.fetchData(value);

  }
  
  async fetchData(value) {

    const response = await api.get('/books?name='+value)

    this.setState({sectionData:response?.data})
    
  }

  async componentDidMount(){
    this.fetchData('');
  }

  render() { 
    
    const {title, footer_desc} = this.props;
    
    const {sectionData} = this.state;

    const sectionClassSearch = 'SectionSearch';
    
    const sectionClassData = 'SectionData';

    const inputLabel='Barra de pesquisa:';

    return (
        <div className="Welcome">
          <Header title={title}></Header>
          <Section className={sectionClassSearch}> <Input label={inputLabel} callback={this.filterList} /></Section>
          <Section className={sectionClassData}> <List data={sectionData}/> </Section>
          <Footer description={footer_desc}></Footer>
        </div>
      );
      
  }

}

export default Welcome;