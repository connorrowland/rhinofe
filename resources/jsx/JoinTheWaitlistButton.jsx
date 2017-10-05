import React from 'react';
import $ from 'jquery'; 

class Navbar extends React.Component {
    navigateToSignup(){
      $('html,body').animate({
         scrollTop: $("#get-started--form-wave").offset().top
      },600);
    }
    render() {
      return (
        <div>
          <button onClick={this.navigateToSignup} className="home--waitlist-button-desktop">
            Join the waitlist
          </button>
        </div>
      );
    }
};

export default Navbar;