import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
	state = {
		showFormReview: false,
	};

	handleReviewOn = () => {
		this.setState({ showFormReview: true });
	};

	handleReviewOff = () => {
		this.setState({ showFormReview: false });
	};

	renderContent() {
		if (this.state.showFormReview) {
			return <SurveyFormReview onCancel={this.handleReviewOff} />;
		}
		return <SurveyForm onSurveySubmit={this.handleReviewOn} />;
	}
	render() {
		return <div>{this.renderContent()}</div>;
	}
}
export default reduxForm({form: 'surveyForm'})(SurveyNew);
