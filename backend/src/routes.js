const { Router } = require('express');

const { getById, getByKey } = require('./controllers/MonsterController')

const routes = Router();

routes.get('/check', (req, res) => {
  return res.status(200).json({ message: 'Server running :)' })
})

routes.get('/:id', async (req, res) => {
  const { id } = req.params;

  const monster = await getById(id);

  return res.status(200).json(monster);
})

routes.get('/', async (req, res) => {
  const key = req.query.key;
  const value = req.query.value;
  const page = req.query.page;

  const monsters = await getByKey(key, value, page);

  return res.status(200).json(monsters);
})

routes.get('/show', async (req, res) => {
  const monsters = await MonsterController.show();

  return res.status(200).json(monsters);
})

module.exports = routes;