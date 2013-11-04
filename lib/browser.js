(function() {
  var root;

  root = window;
  root.sequoia = Sequoia();
  root.Bucket = Bucket;

}).call(this);

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.4.0/moment.min.js'

document.body.appendChild(script);
