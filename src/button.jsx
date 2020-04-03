import React from 'react';

class Button extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('pk');
    }
    componentWillUnmount(){
        console.log('fuck');
    }
    render(){
        return (
            <button>{this.props.buttonTitle}</button>
        );
    };
}

export default Button;