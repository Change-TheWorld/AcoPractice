let path = require('path');
let express = require('express');
let app = express();
let port = 3000;

require('./webpack-dev-middleware')(app);

app.use('/static', express.static(path.resolve(__dirname, '../static')));

require('./mock')(app);

app.use((req, res) => {
  res.json({});
});

app.listen(port, () => {
  console.log('Project started on port ' + port);
});
