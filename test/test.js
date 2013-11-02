var _ = require('underscore')
  , moment = require('moment')
  , expect = require('expect.js')
  , sequoia = require('../index');

describe('Sequoia', function() {
  describe('#integer()', function () {
    it('should be returned valiable of integer.', function () {
      expect(sequoia.integer()).to.be.a('number');
    });

    it('should be returned 1 between 100.', function () {
      for (i = 0; i < 1000; i++) {
        expect(_.range(1, 101)).to.contain(sequoia.integer({min: 1, max: 100}));
      };
    });
  });

  describe('#float()', function () {
    it('should be returned valiable of float.', function () {
      expect(sequoia.float()).to.be.a('number');
    });

    it('should be returned 5.5 between 7.25', function () {
      for (i = 0; i < 1000; i++) {
        expect(_.range(5.5, 7.5, 0.25)).to.contain(sequoia.float({min: 5.5, max: 7.25, step: 0.25, name: "star"}));
      };
    });
  });

  describe('#date()', function () {
    it('should be returned variable of date.', function () {
      expect(sequoia.date()).to.be.a('string');
      expect(sequoia.date()).to.match(/\d{4}-\d\d-\d\d \d\d:\d\d:\d\d \+\d\d:\d\d/);
    });

    it('should be returned 2013-11-01 between 2014-01-01', function () {
      var start = moment("2013-11-01").format("YYYY-MM-DD hh:mm:ss Z")
        , last = moment("2014-01-01").format("YYYY-MM-DD hh:mm:ss Z");

      for (i = 0; i < 2000; i++) {
        expect(sequoia.date({min: "2013-11-01", max: "2014-01-01", name: "kome"})).to.be.within(start, last);
      }
    });
  });

});
