import React, { Component } from 'react';
import CadastroForm from './CadastroForm';
import ListTable from './ListTable';

class Cadastro extends Component {
  state = {
    lists: [
      {
        id: 1,
        name: 'James'
      },
      {
        id: 2,
        name: 'Mary'
      },
      {
        id: 3,
        name: 'Doug'
      }
    ]
  }

  addName = (name) => {
    console.log(name)
    const newName = {
      id: 4,
      name
    }
    this.setState({lists: [...this.state.lists, newName]})
  }

  render() {
    return (
      <div>
        <CadastroForm addName={this.addName}/> 
        <ListTable lists={this.state.lists}/>
      </div>
    );
  }
}

export default Cadastro;