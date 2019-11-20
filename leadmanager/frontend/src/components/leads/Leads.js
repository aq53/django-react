import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getLeads, deleteLead } from "../../actions";
import PropTypes from "prop-types";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    console.log(this.props.leads);
    return (
      <Fragment>
        <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => {
              return (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button
                      onClick={this.props.deleteLead.bind(this, lead.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default connect(
  state => {
    return {
      leads: state.leads.leads
    };
  },
  {
    getLeads,
    deleteLead
  }
)(Leads);
