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
                className={this.state.isClicked ? 'nav-link active' : 'nav-link'}
                onClick={this.changeToActive}
                >
                Link
                </a>
            </li>

            <li>
                <a
                href={this.props.href} 
                className={this.state.isClicked ? 'nav-link active' : 'nav-link'}
                onClick={this.changeToActive}
                >
                Link
                </a>
            </li>

            <li>
                <a
                href={this.props.href} 
                className={this.state.isClicked ? 'nav-link active' : 'nav-link'}
                onClick={this.changeToActive}
                >
                Link
                </a>
            </li>


            <li>
                <a
                href={this.props.href} 
                className={this.state.isClicked ? 'nav-link active' : 'nav-link'}
                onClick={this.changeToActive}
                >
                Link
                </a>
            </li>


            <li>
                <a
                href={this.props.href} 
                className={this.state.isClicked ? 'nav-link active' : 'nav-link'}
                onClick={this.changeToActive}
                >
                Link
                </a>
            </li>

           
            </div>

        )
    }
}

export default ListElem;
