var Search = (props) => {
  debugger;
  return (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={()=>searchYouTube({q: $('.form-control').val()}, props.cb2)}/>
    <button onClick={()=>searchYouTube({q: $('.form-control').val()}, props.cb)} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;