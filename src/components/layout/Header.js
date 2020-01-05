import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header  style={headerStyle}>
            <h1>Todo List</h1>
            <Link to="/" style={linkStyle} >Home</Link> | <Link to="/about" style={linkStyle}> About</Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor : '#333',
    color : '#fff',
    textAlign : 'center',
    padding : 'p10x'
  }

  const linkStyle={
      color : '#fff',
      textDecoration:'none'
  }