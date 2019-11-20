import React, { Component } from "react";
import { connect } from "react-redux";
import { addLead } from "../../actions";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };
  static propTypes = {
    addLead: PropTypes.func.isRequired
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div className="container">
        <h2>Add Lead Form</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              onChange={this.onChange}
              name="email"
              value={this.state.email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email"
            />
          </div>

          <div className="form-group">
            <input
              onChange={this.onChange}
              type="textarea"
              name="message"
              value={this.state.mmessage}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Message"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  addLead
})(Form);
