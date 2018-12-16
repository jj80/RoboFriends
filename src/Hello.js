import React, { Component } from 'react';
import "./Hello.css"

class Hello extends Component {
	render() {
		return (
			<div className="f1 tc">
				<h1>Hello World!</h1>
				<p>Hello {this.props.name}</p>
			</div>
		);
	}
}

export default Hello;
