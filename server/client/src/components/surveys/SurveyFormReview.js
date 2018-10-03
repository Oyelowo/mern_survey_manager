// show users their inputs to review
import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';



const SurveyFormReview = ({onCancel, formValues}) => {
    const reviewFields = formFields.map(({label, name})=> 
    ( <div key={name}>
         <label>{label}</label>
         {formValues[name]}
     </div>)
     );
    return (
        <div>
        <h5>Kindly confirm your input</h5>
        <div>
            
            {reviewFields}
        </div>
     < button className = "yellow darken-3 btn-flat" onClick = {onCancel}>Back </button>
     </div>
     );
}


const mapStateToProps=(state)=>{
    return{
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps)(SurveyFormReview);
