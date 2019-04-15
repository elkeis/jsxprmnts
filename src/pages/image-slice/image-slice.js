import React, {Component} from 'react';
import ImageSlice from '../../components/ImageSlice';
import initialData from './initial-data';
import PropertyControls from '../../components/PropertyControls';
import CSSEditor from '../../components/CSSEditor';

class ImageSlicePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSlice: {
                ...initialData.imageSlice
            },
            css: initialData.css
        }
    }

    setImageSliceProps(propsObj) {
        this.setState({
            imageSlice: {...this.state.imageSlice, ...propsObj}
        });
    }

    render() {
        return (
            <div className="image-slice-page">
                <div className="component-area">
                    <h1>ImageSlice component</h1>
                    <p>Image sliced in <code>N</code> pieces at different angle. 
                    Use controls and CSS editor to play with effects</p>
                    <div className="image-container">
                        <div className="image">
                            <ImageSlice
                                {...this.state.imageSlice}
                            >
                            </ImageSlice>
                        </div>
                    </div>
                    <div className="component-property-controls">
                        <PropertyControls 
                            {...this.state.imageSlice}
                            onChange={this.setImageSliceProps.bind(this)}
                        >
                        </PropertyControls>
                    </div>
                </div>
                <div className="styles-area">
                    <CSSEditor
                        css={this.state.css}
                    ></CSSEditor>
                </div>
            </div>
        );
    }
}

export default ImageSlicePage;