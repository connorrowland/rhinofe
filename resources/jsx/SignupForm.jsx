import React from 'react';
import $ from 'jquery'; 

class SignupForm extends React.Component {
    constructor(props) {
      super(props)

      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleFormChange = this.handleFormChange.bind(this)
      this.validateEmail = this.validateEmail.bind(this)

      this.state = {
        canSubmit: false,
        formValid: false,
        full_name: '',
        company_name: '',
        email: '',
        phone_number: '',
        showError: false
      }
    }

    handleSubmit(data){
      var cleanPhoneNum = this.state.phoneNumber.replace(/\D/g,'');
      var signUpData = {
        'full_name':this.state.name,
        'company_name': this.state.companyName,
        'email': this.state.email,
        'phone_number': cleanPhoneNum
      }

      $.ajax({
        url: "/",
        type: "POST",
        data: JSON.stringify(signUpData),
        contentType: 'application/json;charset=UTF-8',
        dataType: 'json',
        cache: false,
        success: function(data) {
          this.setState({
              hasSubmittedInformation: true
          });
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    }

    handleFormChange(event){
      this.setState({
        [event.target.id]: event.target.value
      })
      if(event.target.id == "email"){
        this.validateEmail(event.target.value);
      }
      if(event.target.id == "phone_number"){
        var input = event.target.value.replace(/\D/g,'');
        console.log(input);
        input = input.substring(0,10);
        var size = input.length;
        if(size == 0){
          event.target.value = input;
        }else if(size < 4){
          event.target.value = '('+input;
        }else if(size < 7){
          event.target.value = '('+input.substring(0,3)+') '+input.substring(3,6);
        }else{
          event.target.value = '('+input.substring(0,3)+') '+input.substring(3,6)+' - '+input.substring(6,10);
        }
      }
    }

    validateEmail(email){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(email)){
        this.setState({
          formValid: true,
          showError: false
        })
      } else {
        this.setState({
          formValid: false,
          showError: true
        })
      }
    }

    handleFocus(e){
      console.log(e);
      console.log("focus");
    }

    showError(){
      return (
        <p className="error-message--text-input">Please enter a valid email.</p>
      )
    }

    render() {
        var validFormClasses = this.state.formValid ? "dkblue-button-enabled" : "dkblue-button-disabled";
        var errorMessage = this.state.showError ? this.showError() : null;
        var errorFormClass = this.state.showError ? "form-control text-input--error" : "form-control";
        return (
            <div className="container signupForm--container">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" id="full_name" placeholder="Full name (optional)" onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="company_name" placeholder="Company name (optional)" onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  {errorMessage}
                  <input type="email" className={errorFormClass} id="email" placeholder="Enter email" onFocus={this.handleFocus} onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <input type="tel" pattern="[0-9]*" className="form-control" id="phone_number" placeholder="Phone number (optional)" onChange={this.handleFormChange}/>
                </div>
                <button type="submit" className={"signupForm--submit " + validFormClasses} onClick={this.handleSubmit}>Join the waitlist</button>
              </form>
            </div>
        );
    }

};

export default SignupForm;