import Header from '../../containers/Header';
import Section from '../../containers/Section';
import Footer from '../../containers/Footer';
import List from '../../components/List'
import Input from '../../components/Input'
import './Welcome.css';

const Welcome = () => {

  const inputLabel = 'Barra de pesquisa:';

  return (
        <div id='container Welcome'>
          <Header><Input label={inputLabel}/></Header>
          <Section><List/></Section>
          <Footer/>
        </div>
      );
   

}

export default Welcome;