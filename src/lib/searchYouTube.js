var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + YOUTUBE_API_KEY,
    method: 'GET',
    videoEmbeddable: 'true',
    type: 'video',
    data: options,
    success: function(d) {
      console.log(d);
      callback(d);
    },
    error: function(e) {
      console.log(e);
    }
  });
};

window.searchYouTube = searchYouTube;