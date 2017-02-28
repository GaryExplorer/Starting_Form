import React, { Component } from 'react';
import mainStyle from '../../style/mainStyle';
import inputBlock from './inputBlock';

export default class App extends Component {
    render(){
        return (
            <div>
                <p style = {mainStyle.pStep}>Step 1 of 4</p>
                <h1 style = {mainStyle.hStyle}>Let's get started</h1>
                <p>Tell us about yourself to see personalized loan options. This will not affect your credit score</p>
                <inputBlock />
            </div>
        );
    }
}
