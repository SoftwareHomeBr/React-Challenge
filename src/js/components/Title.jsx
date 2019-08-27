// src/js/components/Post.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { paginar } from '../actions/index';

export class ConnectedTitle extends Component {
  constructor() {
    super();
    this.pag_dir = this.pag_dir.bind(this);
    this.pag_esq = this.pag_esq.bind(this);
    this.render = this.render.bind(this);
  }
  componentDidMount() {
//***     this.props.getData();
  }
  
  render() {
    let botoes =    
    (<label>
        <input type="button" value="<-" title="prévia" id="pgesq"  onClick={()=>{this.pag_esq()}}  />
        <span> </span>
        <input type="button" value="->" title="próxima" id="pgdir" onClick={()=>{this.pag_dir()}} /> 
       </label>);

   return (
        <div style={{display:'inline-block'}} ><span>{this.props.authorName}</span> {this.props.authorName.length > 0 ? botoes:'' }
        </div>
    );
  }


  pag_esq() {
    this.props.paginar(-1);
  }
  pag_dir() {
    this.props.paginar(1);
  }

}
const mapStateToProps = state => {
    console.log(state);
    return { authorName: state.authorName };
  };
  function mapDispatchToProps(dispatch) {
    return {
      paginar: direcao => dispatch(paginar(direcao))
    };
  }

const Title = connect(mapStateToProps,mapDispatchToProps)(ConnectedTitle);
export default Title;