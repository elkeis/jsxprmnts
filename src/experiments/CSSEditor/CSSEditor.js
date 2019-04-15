import React, {Component} from 'react';

class CSSEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            css: props.css
        };
    }
    
    setCSS(event) {
        this.setState({
            css: event.target.value
        });
    }

    render() {
        return (
            <div className="CSSEditor">
                <textarea value={this.state.css} onChange={this.setCSS.bind(this)}></textarea>
                <style>{this.state.css}</style>
            </div>
        );
    }
}

export default CSSEditor;