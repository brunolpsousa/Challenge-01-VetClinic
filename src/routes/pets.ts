import { Router } from 'express'
import {
  createPet,
  deletePet,
  replacePet,
  modifyPet,
  getPet,
} from '@controllers/pet'

const router = Router()

router.post('/pet/:tutorId', createPet)
router
  .route('/pet/:petId/tutor/:tutorId')
  .get(getPet)
  .put(replacePet)
  .patch(modifyPet)
  .delete(deletePet)

export default router
