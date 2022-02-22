import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    //event.preventDefault();
    
    const degrees = getDegrees(this.state.value);
    alert('The degrees are: ' + degrees);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function getDegrees(input){
  //TODO: call an api to get the degrees:
  //https://jsonplaceholder.typicode.com/posts/2

  alert(callApi());

  if(input==="ken")
    return 0;
  else
    return 1;
}

function callApi(){
  //TODO parse the return json and return the field we need
  //return parseJson(fetch('https://jsonplaceholder.typicode.com/posts/2').then(({ results }) => this.setState({ person: results })));
}


ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);

