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
            <div className={this.state.isClicked ? 'div-elem-active' : 'div-elem-nonactive'}>
                <li>
                    <a
                    href={this.props.href} 
                    onClick={this.changeToActive}
                    className={this.state.isClicked ? 'sidebar-elem-active' : 'sidebar-elem-nonactive'}
                    >
                    {this.props.content}
                    </a>
                </li>
            </div>

        )
    }
}

export default ListElem;
