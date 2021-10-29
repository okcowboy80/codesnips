import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export class MyNav extends Component {
	// const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};
		this.toggle = this.toggle.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
		  isToggleOn: !prevState.isToggleOn
		}));
	  }

	  toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
      }

	  handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

	render() {
		return (
			<div >
				<Navbar color="dark" dark expand="md" className="ml-auto" >
					<NavbarBrand id="brand" href="/">&lt;Code-Snips/&gt;</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isToggleOn} navbar>
					<Nav navbar className="ms-auto">
						<NavItem>
						<NavLink href="/components/"></NavLink>
						</NavItem>
						<NavItem>
						<NavLink href="#">Sign Up</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar >
						<DropdownToggle nav caret>
							Site Links
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>
							About Us
							</DropdownItem>
							<DropdownItem>
							Contact Us
							</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>
							Snippet Gallery
							</DropdownItem>
						</DropdownMenu>
						</UncontrolledDropdown>	
						
						<NavItem >
							<input id="search" type="text" placeholder="Search.."></input>
						</NavItem>
					</Nav>	
						<NavLink>
							<i class="fa fa-sign-in-alt icon fa-2x" onClick={this.toggleModal}></i>
						</NavLink>	
					</Collapse>
				</Navbar>

				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader charCode="close" className="close" toggle={this.toggleModal}>Login
					{/* <Button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></Button> */}
					</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="muted" >Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
    		</div>
		)
	}
}

export default MyNav
