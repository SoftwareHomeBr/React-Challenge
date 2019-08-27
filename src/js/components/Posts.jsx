// src/js/components/Post.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
export class Post extends Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }
  render() {
    return ( 
      this.props.errored ? <b>this.props.errored</b> :
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
             <h3><img src={'bullet.png'} alt={'.'} /> {el.title}</h3>
            <span>{el.body}</span>
          </li>
        ))}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(state.pagenum * 3 , state.pagenum * 3 + 3),
    errors: state.errored
  };
}
export default connect(
  mapStateToProps,
  { getData }
)(Post);