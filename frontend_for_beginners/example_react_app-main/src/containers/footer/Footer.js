import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  
  constructor(props){
    super(props);
    this.state = {};
  }

  render() { 
    
    const {description} = this.props;

    return (
        <div className="Footer">
          <span>{description}</span>
        </div>
      );
      
  }

}

export default Footer;
