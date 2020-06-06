import express, { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

//rotas
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

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
routes.get('/points/', pointsController.index);
routes.get('/points/:id', pointsController.show);


routes.post('/points', upload.single('image'), pointsController.create);

export default routes;