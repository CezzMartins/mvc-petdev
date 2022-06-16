import { Request, Response } from 'express';
import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';


export const search = (request: Request, response: Response) => {
    let query: string = request.query.q as string;
    let animalList = Pet.getByName(query);

    if(!query){
        response.redirect('/');
        return;
    }

    response.render('pages/page', {
        menu: createMenuObject(''),
        animalList,
        query
    })
}   