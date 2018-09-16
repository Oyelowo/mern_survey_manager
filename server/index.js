const express = require('express');
const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {Strategy:GoogleStrategy} = require('passport-google-oauth20');
const app = express();

// https://console.developers.google.com/apis/dashboard

// clientID 601599414150-jgma83rtn6ntdr355il2cm1a6be0plqc.apps.googleusercontent.com
// clientSecret NKOUcq5P6DjDlJuGmAJRqA7c

passport.use( new GoogleStrategy());


const PORT = process.env.PORT || 5000;
app.listen(PORT);
