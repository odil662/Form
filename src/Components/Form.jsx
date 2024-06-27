import React from "react";
import "./Form.css";
const formData = [];

class Form extends React.Component {
  state = {
    name: "",
    surname: "",
    email: "",
    gender: "",
  };

  changeState = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  changeGender = (event) => {
    this.setState({ gender: event.target.name });
  };

  sendForm = (event) => {
    if (this.state.name && this.state.surname && this.state.email) {
      formData.push({
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        gender: this.state.gender,
      });
    }
    this.setState({
      name: "",
      surname: "",
      email: "",
      gender: "",
    });
  };

  render() {
    return (
      <div className="form">
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.changeState}
          />
        </label>
        <br />
        <label>
          Surname:
          <br />
          <input
            type="text"
            name="surname"
            value={this.state.surname}
            onChange={this.changeState}
          />
        </label>
        <br />
        <p> Gender:</p>
        <label>
          <input
            className="checkbox"
            type="radio"
            id="male"
            name="male"
            checked={this.state.gender === "male"}
            onChange={this.changeGender}
          />
          <label className="checkbox-text" htmlFor="male">
            male
          </label>
          <input
            className="checkbox"
            type="radio"
            id="female"
            name="female"
            checked={this.state.gender === "female"}
            onChange={this.changeGender}
          />
          <label className="checkbox-text" htmlFor="female">
            female
          </label>
        </label>
        <br />
        <label>
          Email:
          <br />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.changeState}
          />
        </label>
        <br />
        <button type="reset" onClick={this.sendForm}>
          Отправить
        </button>
        <br />
        {formData.map((el, i) => (
          <div key={i} className="userData">
            <p>{el.name}</p>
            <p>{el.surname}</p>
            <p>{el.gender}</p>
            <p>{el.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Form;
