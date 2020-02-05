import React from "react";
import { Button, Form, Nav, Navbar, FormControl} from 'react-bootstrap';

export default function Navigation() {
  return (
    <div>
      
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Imdb</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Menu</Nav.Link>
            <Nav.Link href="/watchlist">Watchlist</Nav.Link>
            <Nav.Link href="/signin">SignIn</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <br />
    </div>
  );
}
