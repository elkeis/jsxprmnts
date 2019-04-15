import React, {Component} from 'react';
import {calculateCssValues} from './sliceMath';
const COMPONENT_STYLE = {
    width: '100%',
    height: '100%',
    position: 'relative'
};

const DEFAULT_SLICE_CLASS_NAME = 'slice';

class ImageSlice extends Component {
    constructor(props) {
        super(props);

        this.photoUrl = props.url;
        this.height = props.height;
        this.width = props.width;
        this.sliceCount = props.sliceCount || 4;
        this.sliceAngle = props.sliceAngle || 30;
    }

    buildSliceClassNames(sliceClassName) {
        let sliceClassNames = [DEFAULT_SLICE_CLASS_NAME];
        if (sliceClassName && sliceClassName !== DEFAULT_SLICE_CLASS_NAME ) {
            sliceClassNames.push(sliceClassName);
        }
        return sliceClassNames.join(' ');
    }

    buildImageSliceStyle(cssValues) {
        const v = cssValues;
        return  {
            width: `${v.w}px`,
            height: `${v.h}px`,
        };
    }

    buildPhotoContainerSliceStyle(cssValues) {
        const v = cssValues;
        return {
            width: `${v.W}px`,
            height: `${v.H}px`,
            transform: `translate3d(${v.dX}px, ${v.dY}px, 0) rotate(-${v.alpha}deg)`,
        };
    }

    buildSliceStyle(cssValues) {
        const v = cssValues;
        return {
            width: `${v.sW}px`,
            height: `${v.sH + 1}px`,
            margin: '-1px 0px',
            overflow: 'hidden'
        };
    }

    buildSliceBackgroundStyle(cssValues, i) {
        const v = cssValues;
        let s = {
            width: `${v.w}px`,
            height: `${v.h}px`,
            transform: `translate3d(${v.dx[i]}px, ${v.dy[i]}px, 0) rotate(${v.alpha}deg)`,
            backgroundImage: `url(${this.props.url})`,
            backgroundSize: `${v.w}px ${v.h}px`
        };
        return s;
    }

    render() {
        const v = calculateCssValues(
            this.props.width,
            this.props.height,
            this.props.sliceCount,
            this.props.sliceAngle
        );
        const sliceClassNames = this.buildSliceClassNames(this.props.sliceClass);
        const slices = [];
        for (let i = 0; i < v.n; i++) {
            slices.push(
                <div className={sliceClassNames} style={this.buildSliceStyle(v)} key={i}>
                    <div className="slice-background" style={this.buildSliceBackgroundStyle(v, i)}></div>
                </div>
            );
        }
        return (
            <div className="ImageSlice" style={this.buildImageSliceStyle(v)}>
                <div className="photo-container" style={this.buildPhotoContainerSliceStyle(v)}>
                    {slices}
                </div>
            </div>
        );
    }
}

export default ImageSlice;