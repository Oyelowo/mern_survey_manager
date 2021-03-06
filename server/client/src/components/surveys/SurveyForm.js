// gets input from users
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return (
			<div>
				{formFields.map(({ label, name }) => (
					<Field key={name} label={label} type="text" name={name} component={SurveyField} />
				))}
			</div>
		);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
					</Link>
					<button type="submit" className="teal btn-flat right white-text">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};
	errors.recipients = validateEmails(values.recipients || '');
	formFields.forEach(({ name }) => {
		if (!values[name]) {
			errors[name] = 'Please, provide ' + name;
		}
	});

	return errors;
};

export default reduxForm({ validate, form: 'surveyForm', destroyOnUnmount: false })(SurveyForm);
