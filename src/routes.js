import { Router } from 'express';
import SelecaoController from './app/controllers/SelecaoController.js';

const router = Router();

// ROTAS
// listar seleções
router.get('/selecoes', SelecaoController.index );
// listar seleção por id
router.get('/selecoes/:id', SelecaoController.show );
// inserir um post
router.post('/selecoes', SelecaoController.store);
// atualizar selecao por id 
router.put('/selecoes/:id', SelecaoController.update);
// deletar selecao por id
router.delete('/selecoes/:id', SelecaoController.delete);

export default router;