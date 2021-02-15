import {  Router} from 'express'
import { getRepository } from 'typeorm';
import Student from '../models/Student';
import { validate } from 'class-validator';

const studentRouter = Router();

studentRouter.post('/', async (request, response)=>{
    try {
        const repo = getRepository(Student);
       
        const {key, name, email} = request.body;
        const student = repo.create({
            key,
            name,
            email
        })
        const errors = await validate(student);
        if(errors.length===0){
            let res = await repo.save(student)
            return response.status(200).json(res);
        }else{
           return response.status(400).json(errors.map(v => v.constraints))
        }
        
    } catch (error) {
        console.log(error.message)
        return response.status(400).send();
    }
});
studentRouter.get('/', async(request, response)=>{
    response.json(await getRepository(Student).find());
});

export default studentRouter;