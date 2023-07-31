import { Router } from 'express'
import {
  createTutor,
  deleteTutor,
  getAllTutors,
  replaceTutor,
  modifyTutor,
} from '@controllers/tutor'

const router = Router()

router.get('/tutors', getAllTutors)
router.post('/tutor', createTutor)
router
  .route('/tutor/:id')
  .put(replaceTutor)
  .patch(modifyTutor)
  .delete(deleteTutor)

export default router
