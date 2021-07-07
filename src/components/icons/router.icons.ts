import express from 'express'
import * as controller from './controller.icons'
const router = express.Router()

const prefix = '/icons'
router.get('/newReleaseGitlab', controller.newRelease)
router.post('/getIcons', controller.getIcons)

export {
  router,
  prefix
}
