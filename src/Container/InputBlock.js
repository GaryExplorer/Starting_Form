import React, {Component} from 'react';
import inputStyle from '../Style/input_style';
import textHandler from './textHandler';


export default class InputBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            focus : false,
            text : ''
        }

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleText = this.handleText.bind(this);
    }

    handleFocus(event){
        this.setState({
            focus: true
        })
    }

    handleBlur(event){
        this.setState({
            focus: false
        })
        
        if(this.props.info.needValidation){
            this.props.handleValidation(this.props.info.type, this.state.text);
        }
    }

    handleText( event ){
        let textValue = event.target.value;
        let len = textValue.length;

        if(this.props.info.type == 'FIRSTNAME'){
            if(!isNaN(textValue.charAt(len-1)))
                textValue = textValue.substring(0,(len-1));
        }

        if(this.props.info.type == 'LASTNAME'){
            if(!isNaN(textValue.charAt(len-1)))
                textValue = textValue.substring(0,(len-1));
        }

        if(this.props.info.type == 'DOB'){
            let len0 = this.state.text.length;

            console.log('before',this.state.text);
            console.log('after ',textValue);

            if(len == 11 || (isNaN(textValue.charAt(len-1)) && textValue.charAt(len-1)!='/'))
                textValue = textValue.substring(0,(len-1));
            
            if((len == 2 && len0 == 1) || (len == 5 && len0 == 4))
                textValue = textValue + '/';
            if((len == 2 && len0 == 3) || (len == 5 && len0 == 6))
                textValue = textValue.substring(0,(len-1));
            
        }

        this.setState({
            text: textValue
        });

        
        this.props.handleValueChange(this.props.info.type, textValue);
    }
    
    render() {   
        const {focus} = this.state;
        const {validation, info} = this.props;

        return (
            <div style = {inputStyle.inputwrapper}>
                <label style = {inputStyle.inputlabel(focus,validation)}>{info.label}</label>
                <input 
                    style = {inputStyle.inputbox(focus,validation)}
                    placeholder = {textHandler.placeHolderText(info.placeHolderNormal, info.placeHolderFocus, focus)}
                    onFocus = {this.handleFocus}
                    onBlur = {this.handleBlur}
                    onChange = {this.handleText}
                    value = {this.state.text}
                    />
                <p style = {inputStyle.bottomStyle(focus, validation)} >{textHandler.bottomText(info.bottomNormal, info.bottomError, validation)}</p>
            </div>
        );
    }
}