import { Router } from 'express'
import { createPet, deletePet, updatePet, getPet } from '../controllers/pet'

const router = Router()

router.post('/pet/:tutorId', createPet)
router
  .route('/pet/:petId/tutor/:tutorId')
  .get(getPet)
  .put(updatePet)
  .patch(updatePet)
  .delete(deletePet)

export default router
