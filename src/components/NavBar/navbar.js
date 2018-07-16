import React from 'react';
import {Nav,NavItem } from 'react-bootstrap';

export default () => {
  return (
    <div>
    <Nav bsStyle="pills" stacked activeKey={1} >
    <NavItem eventKey={1} href="/">
      CC Denied
    </NavItem>
    <NavItem eventKey={2} >
      CC Accepted
    </NavItem>
  </Nav>
    </div>
  )
}
