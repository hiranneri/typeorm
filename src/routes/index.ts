import { Router } from 'express';
import classRouter from './class.routes';
import lessonRouter from './lessons.routes'
import studentRouter from './student.routes'

const routes = Router();

routes.use('/class',classRouter);
routes.use('/lesson', lessonRouter);
routes.use('/student', studentRouter);
routes.use('/content', lessonRouter);

export default routes;
