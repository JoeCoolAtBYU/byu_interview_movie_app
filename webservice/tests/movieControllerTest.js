const expect = require('chai').expect;
const nock = require('nock');
const sinon = require('sinon');
const response = require('./movieResponse');
const movieController = require('../controllers/movieController');

describe('Movie Controller Tests: ', () => {
  describe('Get movies test', () => {
    it('true should equal true', ()=>{
      expect(true).to.be.true
    });
    // beforeEach(() => {
    //   nock('https://api.themoviedb.org/3/search')
    //     .get(encodeURI('/movie?api_key=95848e6b6628c98611f111abd20018db&language=en-US&query=Star Wars&page=1&include_adult=false'))
    //     .reply(200, response);
    // });
    //
    // it('Get a list of Movies with The Search: Star Wars', () => {
    //   const req = {
    //     query: {
    //       search: 'Star Wars'
    //     }
    //   };
    //
    //   const res = {
    //     status: sinon.spy(),
    //     send: sinon.spy(),
    //     json: response,
    //   }
    //
    //   movieController({name: 'movie'}).get(req, res)
    //   res.status.calledWith(400).should.equal(true, 'Good Status');
    //   res.send.calledWith('')
    // });
  });
});