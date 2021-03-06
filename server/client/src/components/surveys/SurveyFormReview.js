// show users their inputs to review
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = formFields.map(({ label, name }) => (
		<div key={name}>
			<label>{label}</label>
			{formValues[name]}
		</div>
	));
	return (
		<div>
			<h5>Kindly confirm your input</h5>
			<div>{reviewFields}</div>
			<button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
				Back
			</button>
			<button className="green btn-flat right white-text"
            onClick={()=>submitSurvey(formValues, history)}
            >
				Send Survey
				<i className="material-icons right white-text">email</i>
			</button>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		formValues: state.form.surveyForm.values,
	};
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
