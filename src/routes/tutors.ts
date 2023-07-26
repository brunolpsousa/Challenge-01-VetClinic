import { Router } from 'express'
import {
  createTutor,
  deleteTutor,
  getAllTutors,
  updateTutor,
} from '../controllers/tutor'

const router = Router()

router.get('/tutors', getAllTutors)
router.post('/tutor', createTutor)
router
  .route('/tutor/:id')
  .put(updateTutor)
  .patch(updateTutor)
  .delete(deleteTutor)

export default router
