import express from "express";

const app = express();

// indicar para o express ler body com Json
app.use(express.json());

//mock
const selecoes = [
    {id:1, selecao: 'Brasil', grupo: 'G'},
    {id:2, selecao: 'Argentina', grupo: 'G'}
]

// retornar objeto por id
function buscarSelecaoPorId (id) {
    return selecoes.filter( selecao => selecao.id == id)
};

// pegar a posição ou index do elemento no array por id
function buscarIndexSelecao (id) {
    return selecoes.findIndex( selecao => selecao.id == id)
}

// inserir um post
app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso')
});

// rota padrão | raiz
app.get('/', (req, res) => {
    res.send('ola mundo')
});

// listar seleções
app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
});

// listar seleção por id
app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
});

// atualizar selecao por id 
app.put('/selecoes/:id', (req,res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})

// deletar selecao por id
app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id);
    selecoes.splice(index, 1)
    res.send(`selecao com id ${req.params.id} excluida com sucesso`)
});



export default app;

