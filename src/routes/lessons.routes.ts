import { Router} from 'express'
import { getRepository } from 'typeorm';
import Lesson from '../models/Lesson';

const lessonRouter = Router();

lessonRouter.post('/', async (request, response)=>{
    try {
        const repo = getRepository(Lesson);
        const res = await repo.save(request.body)
        return response.status(200).json(res);
    } catch (error) {
        console.log(error.message)
        return response.status(400).send();
    }
});
lessonRouter.get('/', async(request, response)=>{
    response.json(await getRepository(Lesson).find());
});

export default lessonRouter;