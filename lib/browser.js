(function(root) {

  root.sequoia = Sequoia();
  root.Bucket = Bucket;

})(window);

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.4.0/moment.min.js'

window.onload = function() {
  document.body.appendChild(script);
};
