import React, {Component} from 'react';

class PropertyControls extends Component {

    renderDigitControl(name, value) {
        return (
            <div className="control-item">
                <label>{name}</label>
                <input type="number" value={value} onChange={this.buildOnChangeFunction(name)}></input>
            </div>
        )
    }

    renderTextControl(name, value) {
        return (
            <div className="control-item">
                <label>{name}</label>
                <input type="text" value={value} onChange={this.buildOnChangeFunction(name)}></input>
            </div>
        )
    }

    buildOnChangeFunction(propertyName) {
        const onChange = (event) => {
            this.props.onChange({
                [propertyName]: event.target.value 
            });
        };
        return onChange;
    } 

    render() {
        return (
            <div className="property-controls">
                {this.renderTextControl('url', this.props.url)}
                {this.renderTextControl('sliceClass', this.props.sliceClass)}
                {this.renderDigitControl('width', this.props.width)}
                {this.renderDigitControl('height', this.props.height)}
                {this.renderDigitControl('sliceCount', this.props.sliceCount)}
                {this.renderDigitControl('sliceAngle', this.props.sliceAngle)}
            </div>
        )
    }
}

export default PropertyControls;