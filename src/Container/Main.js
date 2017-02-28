import React, {Component} from 'react';
import mainStyle from '../Style/main_style';
import InputBlock from './InputBlock';
import {NOTHING, INCORRECT, CORRECT} from '../Data/state';
import {emailValidator, nameValidator} from '../Validator/handleValidator';
import {FIRSTNAME, LASTNAME, EMAIL, DOB} from '../Data/Info';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
                firstName : {val:'', validation:'NOTHING'},
                lastName : {val:'', validation:'NOTHING'},
                email : {val:'', validation:'NOTHING'},
                dob : {val:'', validation:'NOTHING'}
        }

        this.handleValidation = this.handleValidation.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValidation(type, text) {
        switch(type){
            case 'FIRSTNAME' :
                this.setState({
                    firstName : Object.assign({}, this.state.firstName,{validation:nameValidator(this.state.firstName.val)})
                })
                break;
            case 'LASTNAME' :
                this.setState({
                    lastName : Object.assign({}, this.state.lastName,{validation:nameValidator(this.state.lastName.val)})
                })
                break;
            case 'EMAIL' :
                this.setState({
                    email : Object.assign({}, this.state.email,{validation:emailValidator(this.state.email.val)})
                })
                break;
            case 'DOB' :
                this.setState({
                    dob : Object.assign({}, this.state.dob,{validation:emailValidator(this.state.dob.val)})
                })
                break;
        }
    }

    handleValueChange(type, text){
        switch(type){
            case 'FIRSTNAME' :
                this.setState({
                    firstName : Object.assign({}, this.state.firstName,{val:text})
                })
                break;
            case 'LASTNAME' :
                this.setState({
                    lastName : Object.assign({}, this.state.lastName,{val:text})
                })
                break;
            case 'EMAIL' :
                this.setState({
                    email : Object.assign({}, this.state.email,{val:text})
                })
                break;
            case 'DOB' :
                this.setState({
                    dob : Object.assign({}, this.state.dob,{val:text})
                })
                break;
        }
    }

    handleSubmit(event){

        let current_state = JSON.parse(JSON.stringify(this.state));

        Object.keys(current_state).forEach( function(key) {
            let temp = current_state[key].validation;
            if(temp == NOTHING){
                current_state[key].validation = INCORRECT;
            }
        })

        this.setState(current_state);
    }

    header() {
        return (
            <div>
                <p style = {mainStyle.header}>Step 1 of 4</p>
                <h1 style = {mainStyle.hStyle}>Let's get started</h1>
                <p style = {mainStyle.header_text}>Tell us about yourself to see personalized loan options. This will not affect your credit score</p>
            </div>
        );
    }

    render(){
        return (
            <div>
                {this.header()}
                <form>
                    <InputBlock 
                            info = {FIRSTNAME}
                            validation={this.state.firstName.validation} 
                            handleValidation = {this.handleValidation}
                            handleValueChange = {this.handleValueChange}/>
                    <InputBlock 
                            info = {LASTNAME}
                            validation={this.state.lastName.validation} 
                            handleValidation = {this.handleValidation}
                            handleValueChange = {this.handleValueChange}/>
                    <InputBlock 
                            info = {EMAIL}
                            validation={this.state.email.validation} 
                            handleValidation = {this.handleValidation}
                            handleValueChange = {this.handleValueChange}/>
                    <InputBlock 
                            info = {DOB}
                            validation={this.state.dob.validation} 
                            handleValidation = {this.handleValidation}
                            handleValueChange = {this.handleValueChange}/>
                    <div className = 'TermsCheckBox'>
                        <input type = 'checkbox'/>
                        <label>By checking this box, you agree to the Site Terms and Privacy Policy.</label>
                    </div>
                    <input 
                        onClick = {this.handleSubmit}
                        type = 'button' 
                        className = 'submitButton'
                        value = 'Find my loan options' />
                </form>
            </div>
        );
    }
}

