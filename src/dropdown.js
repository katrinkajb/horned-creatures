import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <select 
                value={this.props.currentValue}
                onChange={this.props.handleChange}
            >
                {
                    this.props.options.map(imageItem =>
                        <option value={imageItem}>{imageItem}</option>)
                }
            </select>
        )
    }
}
