import React, { Component } from "react";
import { connect } from "react-redux";
import { getLeads } from "../../actions";

export class Leads extends Component {
  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    console.log(this.props.leads);
    return (
      <div>
        <h1>Leads List</h1>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      leads: state.leads
    };
  },
  {
    getLeads
  }
)(Leads);
