import { Request, Response } from 'express';


export const home = (request: Request, response: Response) => {
    response.send('home');
}
export const dogs = (request: Request, response: Response) => {
    response.send('dogs');
}
export const cats = (request: Request, response: Response) => {
    response.send('cats');
}
export const fishes = (request: Request, response: Response) => {
    response.send('fishes');
}