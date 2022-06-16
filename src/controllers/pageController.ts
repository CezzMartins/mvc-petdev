import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/pet';

export const home = (request: Request, response: Response) => {
    let animalList = Pet.getAll();
    response.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        animalList
    });
}
export const dogs = (request: Request, response: Response) => {
    let animalList = Pet.getByType("dog");
    response.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        animalList
    });
}
export const cats = (request: Request, response: Response) => {
    let animalList = Pet.getByType("cat");
    response.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        animalList
    });
}
export const fishes = (request: Request, response: Response) => {
    let animalList = Pet.getByType("fish");
    response.render('pages/page', {
        banner: {
            menu: createMenuObject('fish'),
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        animalList
    });
}