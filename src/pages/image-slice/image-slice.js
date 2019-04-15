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
                        {/* <div className="component-control">
                            <div className="control-name">
                            
                            </div>
                            <div className="control-item">
                            
                            </div>
                            <div className="control-value">
                            
                            </div>
                        </div> */}
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