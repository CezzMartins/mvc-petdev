import { Request, Response } from 'express';


export const home = (request: Request, response: Response) => {
    response.render('pages/page', {
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
}
export const dogs = (request: Request, response: Response) => {
    response.render('pages/page', {
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    });
}
export const cats = (request: Request, response: Response) => {
    response.render('pages/page', {
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    });
}
export const fishes = (request: Request, response: Response) => {
    response.render('pages/page', {
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    });
}