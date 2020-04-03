import React from 'react';

class ButtonClass extends React.Component {
    constructor(){
        super();
        this.style = {
            width: '200px',
            height: '100px',
            backgroundColor: 'red'
        };
    }
    render() {
        return ( 
            <button style={this.style}>{this.props.buttonHeadline}</button>
        );
    };
}

export default ButtonClass;