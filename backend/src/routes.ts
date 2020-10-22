import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrfanagersController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;