import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import './Option.css';


class Option extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            animationClass : ''
        };
    }

    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        let rect = node.getBoundingClientRect();
        let midScreen = window.innerWidth * 0.5;
        let right = rect.x + rect.width;

        if (right <= midScreen) {
            this.setState({animationClass : 'slide-from-left'});
        } else {
            this.setState({animationClass : 'slide-from-right'});
        }
    }

    render() {
        return (
            <Button variant="primary" className={`Option ${this.state.animationClass}`} onClick={this.props.onClick}>
                {this.props.value}
            </Button>
        )
    }

}

export default Option;