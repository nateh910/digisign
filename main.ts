// receive cli args
// use args to select implementation and set settings
// start api using implementation and settings
// watch for updates to self repo

import routes from './interfaces/api/routes'
import args from './cli'
import { MemoryImplementation } from './main_implementations/implementations'
import Settings from './settings/settings'
const settings = new Settings()
settings.load_args(args)
const api = routes(MemoryImplementation)
//create file containing middleware lists and apply them by group name or by middleware name
api.start()