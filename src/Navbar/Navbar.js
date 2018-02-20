import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import './navbar.css'



class SiteBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className='navbar' color="faded"  light expand="md">
                    <NavbarBrand className ='navheader' href="/"><h1><strong>Welcome To Indy V Ballers</strong></h1></NavbarBrand>
                    <NavbarToggler onClick={this.props.loggout} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                    {/* registration */}
                                <Button href="/home">Home </Button> 
                            </NavItem>
                            <NavItem>
                                <Button>Upcoming Events</Button>
                            </NavItem>
                            <NavItem>
                                <Button > About Us </Button>
                            </NavItem>
                            <NavItem>
                                <Button onClick={() => this.props.clickLogout()}> {this.props.loggedIn ? "Logout": "Login"} </Button>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default SiteBar;