import React from 'react';
import $ from 'jquery'; 

class Navbar extends React.Component {
    navigateToSignup(){
      $('html,body').animate({
         scrollTop: $("#get-started--form-wave").offset().top
      },600);
    }
    render() {
      $(window).on('scroll', function(){
        if($(window).scrollTop() >= 50){
          $(".header-navbar").addClass("header-navbar--shadow")
        } else if ($(".header-navbar--shadow")){
          //Shadow class has already been added. Scrolltop < 50. Shadow needs to be removed. 
          $(".header-navbar").removeClass("header-navbar--shadow")
        }
      })
      return (
          <div className="header-navbar">
            <div className="header-navbar--inner">
              <div className="header-navbar--logo-menu">
                <div className="header-navbar--toggle-container">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <a className="header-navbar--logo" href="/">
                  <img src="./images/Rhino_Logo.png" width="110" height="33" alt="Rhino Logo"/>
                </a>
              </div>
              <button onClick={this.navigateToSignup} className="header--waitlist-button-desktop">
                Join the waitlist
              </button>
              <button onClick={this.navigateToSignup} className="header--waitlist-button-mobile">
                Join the waitlist
              </button>
            </div>
          </div>
      );
    }
};

export default Navbar;