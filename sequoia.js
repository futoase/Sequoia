var Bucket = {integer: {}, float: {}, date: {}};

if (exports !== "undefined") {
  module.exports = Bucket;
}

if (require !== "undefined") {
  var moment = require('moment')
  var Bucket = require('./bucket');
}

if (exports !== "undefined") {
  module.exports = Sequoia();
}

function Sequoia() {
  return {
     clear: function () {
       Bucket = {integer: {}, float: {}, date: {}};
     },

     integer: function (options) {
       var options = options ? options : {};

       var min = options.min ? options.min : 0
         , max = options.max ? options.max : 100000
         , step = options.step ? options.step : 1
         , name = options.name ? options.name : "standard";

       var b = Bucket.integer;

       b[name] = b[name] ? b[name] : min;
       var now = b[name];
       b[name] += (max > b[name]) ? step : 0;

       return now;
     },

     float: function (options) {
       var options = options ? options : {};

       var min = options.min ? options.min : 0.0
         , max = options.max ? options.max : 100000.0
         , step = options.step ? options.step : 0.1
         , name = options.name ? options.name : "standard";

       var b = Bucket.float;

       b[name] = b[name] ? b[name] : min;
       var now = b[name];
       b[name] += (max > b[name]) ? step : 0.0;

       return now;
     },

     date: function (options) {

       var options = options ? options : {};

       var start = options.start ? moment(options.start) : moment()
         , last = options.last ? momnet(options.last) : moment().add(moment.duration({'days': 7}))
         , step = options.step ? options.step : moment.duration({'seconds': 1})
         , name = options.name ? options.name : "standard";

       var b = Bucket.date;

       b[name] = b[name] ? after : start;

       if (start <= last){
         var after = start.add(step);
       }

       return after.format("YYYY-MM-DD hh:mm:ss Z"); 

     }
   }

};

if (exports !== "undefined") {
  exports.Sequoia = Sequoia();
}

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
