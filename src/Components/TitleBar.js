import React, { Component } from 'react';
import './TitleBar.css';

import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

class TitleBar extends Component {
    
    render() {

        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">NBA焦點新聞</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        )               
    }
}



export default TitleBar;