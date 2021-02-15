import {  Router} from 'express'
import { getRepository } from 'typeorm';
import Content from '../models/Content';

const contentRouter = Router();

contentRouter.post('/', async (request, response)=>{
    try {
        const repo = getRepository(Content);
        const res = await repo.save(request.body)
        return response.status(200).json(res);
    } catch (error) {
        console.log(error.message)
        return response.status(400).send();
    }
});
contentRouter.get('/', async(request, response)=>{
    response.json(await getRepository(Content).find());
});

export default contentRouter;