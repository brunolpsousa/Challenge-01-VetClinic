import swaggerUi from 'swagger-ui-express'
import swaggerConfig from '@docs/swaggerConfig'
import { Router } from 'express'

const router = Router()

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))

export default router
