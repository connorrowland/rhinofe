import React from 'react';
import $ from 'jquery'; 

import SignupForm from './SignupForm.jsx';
import Navbar from './Navbar.jsx';
import JoinTheWaitlistButton from './JoinTheWaitlistButton.jsx';

$(document).ready(function(){
  if(document.getElementById('get-started--form')){
    React.render(<SignupForm/>, document.getElementById('get-started--form'));
  }
  if(document.getElementById('navbar')){
    React.render(<Navbar/>, document.getElementById('navbar'));
  }
  if(document.getElementById('home--waitlist')){
    React.render(<JoinTheWaitlistButton/>, document.getElementById('home--waitlist'));
  }
})
