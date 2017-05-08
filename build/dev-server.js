require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
  // automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
  // Define HTTP proxies to your custom API backend
  // https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

//https://www.npmjs.com/package/body-parser
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.json()

var app = express()

var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/ctc-ui')
var Directory = require('../models/directory')
var Category = require('../models/category')
var Movie = require('../models/movie')

var apiRouters = express.Router()

apiRouters.get('/directories', function(req, res) {
  Directory
    .find({})
    .populate({
      path: 'categories'
    })
    .exec(function(err, directories) {
      if (err) {
        console.log(err)
      }
      res.json({
        errno: 0,
        data: directories
      })
    })
})

apiRouters.get('/categories', function(req, res) {
  var directoryId = req.query.directoryId
  Category.findById(directoryId, function(err, categories) {
    res.json({
      errno: 0,
      data: categories
    })
  })
})

apiRouters.get('/movies', function(req, res) {
  Movie.fetch(function(err, movies) {
    res.json({
      errno: 0,
      data: movies
    })
  })
})

// 详情
app.get('/detail/:id', function(req, res) {
  var id = req.params.id
  Movie.findById(id, function(err, movie) {
    res.json({
      movie: movie
    })
  })
})

// 添加栏目
apiRouters.post('/admin/directory', urlencodedParser, function(req, res) {
  var id = req.body._id
  var directoryObj = req.body
  var _directory
  if (id) {
    directory.findById(id, function(err, directory) {
      if (err) {
        console.log(err, '未找到对应ID的栏目')
      }
      _directory = _.extend(directory, directoryObj)
      _directory.save(function(err, directory) {
        if (err) {
          console.log(err, '更新栏目错误')
        }
        res.json({
          errno: 0,
          data: directory
        })
      })
    })
  } else {
    _directory = new Directory({
      name: directoryObj.name
    })
    _directory.save(function(err, directory) {
      if (err) {
        console.log(err, '新增栏目错误')
      }
      res.json({
        errno: 0,
        data: directory
      })
    })
  }
})

// 添加类别
apiRouters.post('/admin/category', urlencodedParser, function(req, res) {
  var id = req.body._id
  var categoryObj = req.body
  var _category
  if (id) {
    category.findById(id, function(err, category) {
      if (err) {
        console.log(err, '未找到对应ID的栏目')
      }
      _category = _.extend(category, categoryObj)
      _category.save(function(err, category) {
        if (err) {
          console.log(err, '更新栏目错误')
        }
        res.json({
          errno: 0,
          data: category
        })
      })
    })
  } else {
    _category = new Category({
      name: categoryObj.name
    })
    _category.save(function(err, category) {
      if (err) {
        console.log(err, '新增栏目错误')
      }
      res.json({
        errno: 0,
        data: category
      })
    })
  }
})

// 添加子项
apiRouters.post('/admin/movie', urlencodedParser, function(req, res) {
  var id = req.body._id
  var movieObj = req.body
  var _movie
  if (id !== 'undefined') {
    Movie.findById(id, function(err, movie) {
      if (err) {
        console.log(err, '未找到对应ID的信息')
      }
      _movie = _.extend(movie, movieObj)
      _movie.save(function(err, movie) {
        if (err) {
          console.log(err, '更新信息错误')
        }
        res.redirect('/movie/' + movie._id)
      })
    })
  } else {
    _movie = new Movie({
      catalog: movieObj.catalog,
      category: movieObj.category,
      name: movieObj.name,
      url: movieObj.url
    })
    _movie.save(function(err, movie) {
      if (err) {
        console.log(err, '新增信息错误')
      }
      res.redirect('/movie/' + movie._id)
    })
  }
})

app.use('/api', apiRouters)

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
  })
  // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
