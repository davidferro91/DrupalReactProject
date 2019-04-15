import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
            <div className={this.state.isClicked ? 'div-elem-active' : 'div-elem-nonactive'}>
                <li>
                    <Link
                    to={this.props.link} 
                    onClick={this.changeToActive}
                    className={this.state.isClicked ? 'sidebar-elem-active' : 'sidebar-elem-nonactive'}
                    >
                    {this.props.name}
                    </Link>
                </li>
            </div>

        )
    }
}

export default ListElem;
