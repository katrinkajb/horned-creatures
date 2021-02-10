import React, { Component } from 'react'


export default class ImageItem extends Component {
    render() {
        return (
            <li><img alt='horned creature' src={this.props.image.url}/>{this.props.image.title}</li>
        )
    }
}
