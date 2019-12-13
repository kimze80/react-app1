import React, { Component } from 'react';
import TextInput from './TextInput';

class CadastroForm extends Component {
  state = {
    name: ''
  }
  
  constructor(props) {
    super(props);
    // this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addName(this.state.name)
    
    this.setState({name: ''})
  }
  render() {
    return (
      <div>
        <h1>Cadastro</h1>
        <form onSubmit={this.handleSubmit}>
          <TextInput 
          className='form-group col-md-4'
          placeholder='Nome'
          inputClassName='form-control'
          type='text'
          label='Name'
          forName='name'
          onChange={this.handleChange}
          value={this.state.name}/>

          <button 
            className='btn btn-primary'
            type='submit'
            value='Submit'
          >Enviar</button>
        </form>
      </div>
    );
  }
}

export default CadastroForm;