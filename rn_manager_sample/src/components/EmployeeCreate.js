import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeCreate } from '../actions/employee-actions';

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      < Card >
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card >
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate
})(EmployeeCreate);
