const mongoose = require('mongoose');
const {Schema} = mongoose;

const surveySchema = new Schema({
    title: String,
    subject: String,
    body: String,
    recipients: [String],
    yes: Number,
    no: Number
});
mongoose.model('surveys', surveySchema);
