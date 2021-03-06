import React, {Component} from 'react';
import ImageSlice from '../../components/ImageSlice';
import initialData, {DRUNK_SLICE_CLASS, SLICE_CLASS} from './initialData';
import PropertyControls from '../../components/PropertyControls';
import CSSEditor from '../../components/CSSEditor';
import throwSliceCountAlert from './sliceCountAlert';

const GLITCH_STYLE = {
    sliceAngle: 195,
    sliceCount: 26,
    sliceClass: SLICE_CLASS
}
const SPLIT_STYLE = {
    sliceAngle: 76,
    sliceCount: 2,
    sliceClass: SLICE_CLASS
}

const DRUNK_STYLE = {
    sliceCount: 36,
    sliceAngle: -37,
    sliceClass: DRUNK_SLICE_CLASS
}

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
        const imageSliceProps = this.buildImageSliceProps(propsObj);
        if(throwSliceCountAlert(imageSliceProps)) {
            this.setState({
                imageSlice: imageSliceProps
            });
        };
    }

    buildImageSliceProps(propsObj) {
        return {...this.state.imageSlice, ...propsObj};
    }

    setGlitchStyle() {
        this.setImageSliceProps(GLITCH_STYLE);
    }

    setSplitStyle() {
        this.setImageSliceProps(SPLIT_STYLE);
    }

    setDrunkStyle() {
        this.setImageSliceProps(DRUNK_STYLE);
    }

    render() {
        return (
            <div className="image-slice-page">
                <div className="component-area">
                    <div className="description">
                        <h1>ImageSlice component</h1>
                        <p>Image sliced in <code>N</code> pieces at different angle. 
                        Use controls and CSS editor to play with effects.</p>
                    </div>
                    <div className="source">
                        <p><a href="https://github.com/elkeis/jsxprmnts">source</a></p>
                    </div>
                    <div className="image-flex-container">
                        <div className="image-border-cut">
                            <div className="image">
                                <ImageSlice
                                    {...this.state.imageSlice}
                                >
                                </ImageSlice>
                            </div>
                        </div>
                    </div>
                    <div className="component-property-controls">
                        <PropertyControls 
                            {...this.state.imageSlice}
                            onChange={this.setImageSliceProps.bind(this)}
                        >
                        </PropertyControls>
                    </div>
                    <div className="presets">
                        <button onClick={this.setGlitchStyle.bind(this)}>glitch</button>
                        <button onClick={this.setSplitStyle.bind(this)}>split</button>
                        <button onClick={this.setDrunkStyle.bind(this)}> drunk</button>
                    </div>
                </div>
                <div className="styles-area">
                    <div>
                        <CSSEditor
                            css={this.state.css}
                        ></CSSEditor>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageSlicePage;