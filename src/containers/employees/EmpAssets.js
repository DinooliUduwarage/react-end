
import { Switch } from 'react-router-dom';
import { MDBContainer, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import AuthRoute from '../../components/AuthRoute';
import Abc from '../../components/EmpAssets/byid';
import Def from '../../components/EmpAssets/bydepid';
import React, { Component } from 'react';
class Assetspp extends Component {
    state = {  }
    render() { 
        return (  <div>
        
            <MDBContainer>
              <MDBDropdown>
                <MDBDropdownToggle caret color="primary">
                  choose
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem href="/home/emp_assets/id">ID</MDBDropdownItem>
                  <MDBDropdownItem  href="/home/emp_assets/depid" >Department ID</MDBDropdownItem>
                  
                </MDBDropdownMenu>
              </MDBDropdown>
              <Switch>
                
                <AuthRoute path="/home/emp_assets/id" component={Abc} props={this.props}/>
                <AuthRoute exact path="/home/emp_assets/depid" component={Def} props={this.props} />
                
              </Switch>
            </MDBContainer>
          </div> );
    }
}
 
export default Assetspp;
