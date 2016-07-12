class App extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {currentVideo: exampleVideoData[0], currentVideoList: exampleVideoData};
  }

  clickHandler(video) {
    this.setState({currentVideo: video});
  }

  searchHander(videos) {
    debugger;
    this.setState({currentVideo: videos.items[0], currentVideoList: videos.items});
  }
  componentDidMount() {
    searchYouTube({q: ''}, this.searchHander.bind(this));
  }


  render() {
    return (<div>
      <Nav cb={this.searchHander.bind(this)} cb2={_.debounce((input) => this.searchHander(input), 500)}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.currentVideoList} cb={this.clickHandler.bind(this)}/>
      </div>
    </div>);
  };
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;