import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { SignInForm } from '/imports/ui/SignInForm';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
Meteor.startup(() => {
  render( 
    <BrowserRouter>
    <Routes>   
    <Route path="/" element={<App />}></Route>
    <Route path="/SignIn" element={<SignInForm />}>

    </Route>
    </Routes>
     
    </BrowserRouter>

   ,document.getElementById('react-target'));
});
