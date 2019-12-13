import React, { Component } from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    // this.props.onChange && this.props.onChange(e.target.value);
    if (this.props.onChange) {
      this.props.onChange(e)
    }
  }
  render() {
    const {forName,
      type,
      placeholder,
      className,
      inputClassName,
      value,
      label} = this.props;
    return (
      <div className={className}>
        <label htmlFor={forName}>{label}</label>
        <input 
          type={type} 
          placeholder={placeholder} 
          value={value} 
          className={inputClassName} 
          onChange={ this.handleChange }
        ></input>
      </div>
    );
  }
}

export default TextInput;