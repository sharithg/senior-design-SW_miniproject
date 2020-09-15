import { TextField } from '@material-ui/core';
import React from 'react';

class SearchBar extends React.Component {

  state = {
    term: ""
  };

  onInputChange = (e) => {
    this.setState({term: e.target.value})
    console.log(e.target.value);
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);
    this.setState({term: ""});
  }

  render() {
    return(
      <div style={{margin: '2rem 0 2rem 0', width: '30%'}}>
        
         <form onSubmit = {this.onFormSubmit}>
           <div className = "field">
             <TextField fullWidth inputProps={{min: 0, style: { textAlign: 'center' }}}  id='standard-basic' label="Search for a country" value={this.state.term} onChange = {this.onInputChange}  />
           </div>
         </form>
      </div>
    )
  }
}

export default SearchBar;