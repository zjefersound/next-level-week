import express, { Router } from 'express';
import knex from './database/connection';

//rotas
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

/**
 * Padrão de nomes de eventos: 
 * index -> lista
 * show -> mostrar um unico 
 * create -> para criar 
 * update -> atualizar
 * delete -. deletar um item
 */

//items
routes.get('/items', itemsController.index );

//points
routes.post('/points', pointsController.create);
routes.get('/points/', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;