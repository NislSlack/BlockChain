const express = require('express');
const TransactionQuery = require('../.BlockChainAPI/index');
const router = express.Router();

/* GET users listing. */
router.get('/read/:key', async function (req, res, next) {
  try {
    const { key } = req.params;
    const TransactionResult = await TransactionQuery('read', key);
    res.json({ type: 'read', result: JSON.parse(TransactionResult) });
  } catch (error) {
    res.json({ type: 'read', error: error });
  }
});

router.post('/create', async function (req, res, next) {
  try {
    const { key, data } = req.body;
    console.log(key, data);
    const TransactionResult = await TransactionQuery('create', key, data);
    console.log(TransactionResult);
    res.json({ type: 'read', result: TransactionResult });
  } catch (error) {
    res.json({ type: 'read', error: error });
  }
});

router.post('/update', async function (req, res, next) {
  try {
    const { key, data } = req.body;
    const TransactionResult = await TransactionQuery('update', key, data);
    console.log(TransactionResult);
    res.json({ type: 'read', result: TransactionResult });
  } catch (error) {
    res.json({ type: 'read', error: error });
  }
});

router.post('/delete', async function (req, res, next) {
  try {
    const { key } = req.body;
    const TransactionResult = await TransactionQuery('delete', key);
    console.log(TransactionResult);
    res.json({ type: 'read', result: TransactionResult });
    res.send(TransactionResult);
  } catch (error) {
    res.json({ type: 'read', error: error });
  }
});
module.exports = router;
