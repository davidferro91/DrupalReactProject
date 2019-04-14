import React, {Component} from 'react';
import './style.css';

class ListElem extends Component {
    constructor(props) {
        super(props);
        this.state = {isClicked: false};
        this.changeToActive = this.changeToActive.bind(this);
    }

    changeToActive = (e) => {
        e.preventDefault();
        this.setState({
            isClicked: !this.state.isClicked
        });
    }

    render() {
        return (

            <div>

            {/* we should use an array loop here, but for now I will just hard code the list elements */}
            <li>
                <a
                href={this.props.href} 
                className={this.state.isClicked ? 'nav-link clicked' : 'nav-link'}
                onClick={this.changeToActive}
                >
                Divisional Student Employment
                </a>
            </li>

            <li>
                <a
                href={this.props.href} 
                className={this.state.isClicked ? 'nav-link clicked' : 'nav-link'}
                onClick={this.changeToActive}
                >
                Experiential Learning
                </a>
            </li>

            <li>
                <a
                href={this.props.href} 
                className={this.state.isClicked ? 'nav-link active' : 'nav-link'}
                onClick={this.changeToActive}
                >
                Entrepreneurship
                </a>
            </li>


            <li>
                <a
                href={this.props.href} 
                className={this.state.isClicked ? 'nav-link active' : 'nav-link'}
                onClick={this.changeToActive}
                >
                Events
                </a>
            </li>


            <li>
                <a
                href={this.props.href} 
                className={this.state.isClicked ? 'nav-link active' : 'nav-link'}
                onClick={this.changeToActive}
                >
                For Employers
                </a>
            </li>

           
            </div>

        )
    }
}

export default ListElem;
