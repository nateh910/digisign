// receive cli args
// use args to select implementation and set settings
// start api using implementation and settings

import args from './cli'
import Settings from './src/settings/settings'
const settings = new Settings()
settings.load_args(args)
const impl = settings.get_impl()
const express = require('express')
require('./src/interfaces/api/routes')(express, impl)
express.start()