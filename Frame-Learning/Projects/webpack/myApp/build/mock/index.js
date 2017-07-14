let test = require('./data/test');

module.exports = function (app) {
  app.get('/api/test.do', (req, res) => {res.json(test)});
};
