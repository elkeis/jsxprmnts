import React, { Component } from 'react';
import './App.scss';
import ImageSlice from './experiments/ImageSlice';
import imageUrl from './rick-and-morty.png';
import sliceStyles from  './slice-animation.module.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: imageUrl,
      width: 510,
      height: 260,
      sliceCount: 2,
      sliceAngle: 76,
      sliceClass: sliceStyles.slice
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
          <div className="css-editor">
            <textarea onChange={this.changeStyle.bind(this)}></textarea>
          </div>
        </div>
        <style>{this.state.styleText}</style>
      </div>
    );
  }
}

export default App;
