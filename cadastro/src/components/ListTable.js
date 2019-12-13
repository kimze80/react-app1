import React, { Component } from 'react';

class ListTable extends Component {
  render() {
    return this.props.lists.map(list => (
      <h1 key={list.id}>{ list.name }</h1>
    ))
  }
}

export default ListTable;