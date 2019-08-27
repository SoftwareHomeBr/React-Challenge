// src/js/components/Post.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/index";
import { getData } from "../actions/index";

export class Users extends Component {
  constructor() {
    super();
    this.encheoPosts = this.encheoPosts.bind(this);
  }
  componentDidMount() {
    this.props.getUsers();
  }
  encheoPosts(id, name){
    this.props.getData({ id:id, authorName: name});
  }
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.users.map(el => (
          <li className="list-group-item" key={el.id} onClick={(event) => {this.encheoPosts(el.id, el.name)}} > 
            <a >
              <b>{el.name}</b> <br />
              <span>{el.email}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.remoteUsers
  };
}
function mapDispatchToProps(dispatch) {
    return {
      getData: article => dispatch(getData(article))
    };
  }

export default connect(
  mapStateToProps,
  { getUsers, getData }
)(Users);