import { request, response, Router } from 'express'
import { getCustomRepository, getRepository } from 'typeorm';
import Class from '../models/Class';
const classRouter = Router();
import {Like} from 'typeorm';
import ClassRepository from '../repositories/ClassRepository';


classRouter.post('/', async (request, response)=>{
    try {
        const repo =  getCustomRepository(ClassRepository);
        const res = await repo.save(request.body);
        return response.status(201).json(res);
        
    } catch (error) {
        console.log(error.message);
    }
   
})

classRouter.get('/', async (request, response)=>{
    try {
      return response.json(await getRepository(Class).find());
    } catch (error) {
       console.log(error.message) 
    }
    
})

// classRouter.get('/:namev1', async (request, response)=> {
//     try {
//         const data =  getRepository(Class);
//         const res = await data.find({
//             where: {
//                 name: request.params.name,
//             }
//         })
//         response.status(200).json(res);
//     } catch (error) {
//         console.log(error.message) 
//     }
// })

classRouter.get('/:name', async (request, response)=>{
    try {
        const classes = await getRepository(Class).find({
            name: Like(`%${request.params.name}%`)
        })
        response.status(200).json(classes);
    } catch (errors) {
        console.log(errors.message) 
    }
})



export default classRouter;