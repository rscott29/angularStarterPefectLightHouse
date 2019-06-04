import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';
// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import {join} from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();
const fs = require('fs');
const spdy = require('spdy');
const compression = require('compression');
const helmet = require('helmet');
app.use(helmet());
app.use(compression());
// const httpsOptions = {
//   key: fs.readFileSync('./security/Richards-MacBook-Pro.local.key.pem'),
//   cert: fs.readFileSync('./security/Richards-MacBook-Pro.local.cert.pem')
// };
const spdyOptions = {
  key: fs.readFileSync('./security/L-SPF0YRZEG.key.pem'),
  cert: fs.readFileSync('./security/L-SPF0YRZEG.cert.pem'),
  protocols: [ 'h2'],
  plain: false,

  // **optional**
  // Parse first incoming X_FORWARDED_FOR frame and put it to the
  // headers of every request.
  // NOTE: Use with care! This should not be used without some proxy that
  // will *always* send X_FORWARDED_FOR
  // 'x-forwarded-for': true,

  connection: {
    windowSize: 1024 * 1024, // Server's window size

    // **optional** if true - server will send 3.1 frames on 3.0 *plain* spdy
    autoSpdy31: false
  }
};
const PORT = process.env.PORT || 4000;

spdy
  .createServer(spdyOptions, app)
  .listen(PORT, (error) => {
    if (error) {
      console.error(error);
      return process.exit(1);
    } else {
      console.log('Listening on port: ' + PORT + '.');
    }
  });

// your express configuration here
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Server static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {

  res.render('index', { req });
});

