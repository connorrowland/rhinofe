import React from 'react';
import $ from 'jquery'; 

import SignupForm from './SignupForm.jsx';

$(document).ready(function(){
  if(document.getElementById('get-started--form')){
    React.render(<SignupForm/>, document.getElementById('get-started--form'));
  }
})
