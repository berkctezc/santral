import React, { Fragment } from "react";
import { connect } from "react-redux";

const ListElement = ({ text = "text", todoList }) => {
console.log('todoList :', todoList);
  return (
    <Fragment>
      {todoList.todos.map(value => (
        <li>{value.name}</li>
      ))}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    todoList: state.todos
  };
};

export default connect(mapStateToProps)(ListElement);


/* 
List.js deleted

import React , {Fragment} from 'react';

const List = ({text = 'text'})=>{
    return(
        <Fragment>
            <li>{text}</li>
        </Fragment>
        
    )
}


export default List ;  */