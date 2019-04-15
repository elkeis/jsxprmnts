import React, { Component } from 'react';
import './App.scss';
import ImageSlice from './experiments/ImageSlice';
import imageUrl from './rick-and-morty.png';
import CSSEditor from './experiments/CSSEditor';

const SLICE_CLASS = 'image-slice';
const SLICE_STYLE = `
@keyframes slice-glitch {
  0% {
      transform: translateX(0);
  }
  30% {
      transform: translateX(-5px);
  }
  60% {
      transform: translateX(5px);
  }
  100% {
      transform: translateX(0);
  }

}


.${SLICE_CLASS}:nth-child(odd) {
  filter: hue-rotate(85deg);
  animation: slice-glitch .2s linear .0s infinite alternate;
}
.${SLICE_CLASS}:nth-child(even) {
    filter: hue-rotate(-85deg);
    animation: slice-glitch .2s linear .1s infinite alternate;
}`

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: imageUrl,
      width: 510,
      height: 260,
      sliceCount: 2,
      sliceAngle: 76,
      sliceClass: SLICE_CLASS
    }
  }

  changeAngle(event) {
    this.setState({
      sliceAngle: event.target.value
    });
  }
  changeCount(event) {
    this.setState({
      sliceCount: event.target.value
    });
  }
  changeClassName(event) {
    this.setState({
      sliceClass: event.target.value
    });
  }
  changeStyle(event) {
    this.setState({
      styleText: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="photo-container">
          <div className="sliced-photo">
            <ImageSlice
              {...this.state}
              // url={imageUrl}
              // width={510}
              // height={260}
              // sliceCount={11}
              // sliceAngle={11}
              // sliceClass={'image-slice'}
            >
            </ImageSlice>
          </div>
        </div>
        <div className="controls">
          <div className="control">
            <label>angle</label>
            <input type="number" name="angle" onChange={this.changeAngle.bind(this)}
              min="0" max="180" value={this.state.sliceAngle}
            ></input>
            <span>value: {this.state.sliceAngle}</span>
          </div>
          <div className="control">
            <label>slice count</label>
            <input type="number" name="count" onChange={this.changeCount.bind(this)}
              min="2" max="111" value={this.state.sliceCount}
            ></input>
            <span>value: {this.state.sliceCount}</span>
          </div>
          <div className="control">
            <label>slice className</label>
            <input type="text" name="className" value={this.state.sliceClass} onChange={this.changeClassName.bind(this)}
            ></input>
          </div>
        </div>
        <div className="css-editor">
          <CSSEditor css={SLICE_STYLE}></CSSEditor>
        </div>
        <style>{this.state.styleText}</style>
      </div>
    );
  }
}

export default App;
