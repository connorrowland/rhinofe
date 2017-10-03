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
        phone_number: ''
      }
    }

    handleSubmit(data){
      var signUpData = {
        'full_name':this.state.name,
        'company_name': this.state.companyName,
        'email': this.state.email,
        'phone_number': this.state.phoneNumber
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
    }

    validateEmail(email){
      var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/;
      if(re.test(email)){
        this.setState({
          formValid: true
        })
      }
    }

    render() {
        var validFormClasses = this.state.formValid ? "dkblue-button-enabled" : "dkblue-button-disabled";
        return (
            <div className="container signupForm--container">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" id="full_name" placeholder="Full name (optional)"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="company_name" placeholder="Company name (optional)"/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={this.validateEmail}/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="phone_number" placeholder="Phone number (optional)"/>
                </div>
                <button type="submit" className={"signuoForm--submit " + validFormClasses} onClick={this.handleSubmit}>Join the waitlist</button>
              </form>
            </div>
        );
    }

};

export default SignupForm;