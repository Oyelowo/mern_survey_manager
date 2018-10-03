// gets input from users
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
	{
		label: 'Survey Title',
		name: 'title',
	},
	{
		label: 'Subject',
		name: 'subject',
	},
	{
		label: 'Email body',
		name: 'body',
	},
	{
		label: 'Recipient List',
		name: 'emails',
	},
];

class SurveyForm extends Component {
	renderFields() {
		return (
			<div>
				{FIELDS.map(({ label, name }) => (
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
	errors.emails = validateEmails(values.emails || '');
	FIELDS.forEach(({ name }) => {
		if (!values[name]) {
			errors[name] = 'Please, provide ' + name;
		}
	});

	return errors;
};

export default reduxForm({ validate, form: 'surveyForm', destroyOnUnmount: false })(SurveyForm);
