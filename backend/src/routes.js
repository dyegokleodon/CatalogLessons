import { Router } from 'express';


import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ModuleController from './app/controllers/ModuleController';
import LessonController from './app/controllers/LessonController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();


routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/modules', ModuleController.index);
routes.get('/modules/:module_id/lessons', LessonController.index);

routes.use(authMiddleware);

routes.post('/modules', ModuleController.store);
routes.put('/modules/:id', ModuleController.update);
routes.delete('/modules/:id', ModuleController.delete);

routes.post('/modules/:module_id/lessons', LessonController.store);
routes.put('/lessons/:id', LessonController.update);
routes.delete('/lessons/:id', LessonController.delete);



export default routes;