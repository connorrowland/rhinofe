import React from 'react';
import $ from 'jquery'; 

class Navbar extends React.Component {
  constructor(props) {
      super(props)

      this.animateJoinWaitlistText = this.animateJoinWaitlistText.bind(this)
    }

    navigateToSignup(){
      $('html,body').animate({
         scrollTop: $("#get-started--form-wave").offset().top
      },600);
    }
    animateJoinWaitlistText(){
      var self = this;
      $("#join-waitlist--text").on("click", function(){
        self.navigateToSignup();
      })
    }
    render() {
      this.animateJoinWaitlistText();
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