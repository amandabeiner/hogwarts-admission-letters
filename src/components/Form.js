import React from 'react';
import ReactDOM from 'react';
import Letter from './Letter'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      accepted: true,
      addressee: "Addressee"
    };

    this.handleAccepted = this.handleAccepted.bind(this);
    this.handleRejected = this.handleRejected.bind(this);
    this.assignAddressee = this.assignAddressee.bind(this);

  }

  handleAccepted(event){
    this.setState({accepted: true})
  }

  handleRejected(event){
    this.setState({accepted: false})
  }

  assignAddressee(event){
    if(event.target.value ===""){
      this.setState({addressee:"Addressee"})
    } else {
      this.setState({addressee: event.target.value})
    }
  }

  render(){
    return(
      <div className="form">
        <div className="input">
          <input type="text" onChange={this.assignAddressee}/>
        </div>

        <div className="buttons">
          <button onClick={this.handleAccepted}>Accepted</button>
          <button onClick={this.handleRejected}>Rejected</button>
        </div>

        <div className="letter">
          <Letter
            accepted={this.state.accepted}
            addressee={this.state.addressee}
          />
        </div>
      </div>
    );
  }
};

export default Form;
