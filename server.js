'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.listen(PORT, function(){
  console.info(`Listening on port ${PORT}`);
  console.info(`http://localhost:${PORT}/`);
});
