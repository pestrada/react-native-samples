import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

export default class RouterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  openEmployeeCreate = () => {
    Actions.employeeCreate();
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Please Login" initial />
          </Scene>
          <Scene key="main">
            <Scene
              rightTitle="Add"
              onRight={this.openEmployeeCreate}
              key="employeeList"
              component={EmployeeList}
              title="Employees"
            />
            <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
            <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
