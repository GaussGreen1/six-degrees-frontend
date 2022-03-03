import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', data: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const url = "https://six-degrees-of-ryu.herokuapp.com/article/" + this.state.value;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
      this.setState({ data: data });
      console.log(this.state.data.title);
    }).catch((error) => {
      console.log('error = ' + error)
    });

  }

  render() {
    return (
      <>
        <h1>Six Degrees Of Ryu</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2>Degrees:</h2>
        <p>{this.state.data?.title}</p>
      </>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);

