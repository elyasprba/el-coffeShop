const transactionsModels = require('../models/transactions');

const { createTransactions, getAllTransactions, updateTransactions, deleteTransactions } = transactionsModels;

const createTransactionsControllers = (req, res) => {
   createTransactions(req.body)
      .then((data) => {
         res.status(200).json({
            err: null,
            data,
         });
      })
      .catch((err) => {
         res.status(500).json({
            err,
            data: [],
         });
      });
};

const getAllTransactionsControllers = (_, res) => {
   getAllTransactions()
      .then((result) => {
         const { total, data } = result;
         res.status(200).json({
            data,
            total,
            err: null,
         });
      })
      .catch((error) => {
         const { err, status } = error;
         res.status(status).json({
            err,
            data: [],
         });
      });
};

const updateTransactionsControllers = (req, res) => {
   updateTransactions(req.params, req.body)
      .then((data) => {
         res.status(200).json({
            err: null,
            data,
         });
      })
      .catch((err) => {
         res.status(500).json({
            err,
            data: [],
         });
      });
};

const deleteControllersControllers = (req, res) => {
   const { id } = req.params;
   deleteTransactions(id)
      .then(({ data }) => {
         res.status(200).json({
            data,
            err: null,
         });
      })
      .catch((error) => {
         const { err, status } = error;
         res.status(status).json({
            data: [],
            err,
         });
      });
};

module.exports = {
   createTransactionsControllers,
   getAllTransactionsControllers,
   updateTransactionsControllers,
   deleteControllersControllers,
};
