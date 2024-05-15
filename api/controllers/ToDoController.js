/**
 * ToDoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// ToDoController.js
module.exports = {
    index: async function(req, res) {
      try {
        let todos = await ToDo.find();
        return res.view('todo/index', { todos });
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    create: async function(req, res) {
      try {
        let params = req.allParams();
        await ToDo.create(params);
        return res.redirect('/todo');
      } catch (err) {
        return res.serverError(err);
      }
    },
    
    update: async function(req, res) {
        try {
          let todoId = req.params.id;
          let updatedData = req.allParams();
          await ToDo.update({ id: todoId }).set(updatedData);
          return res.redirect('/todo');
        } catch (err) {
          return res.serverError(err);
        }
      },
    
      delete: async function(req, res) {
        try {
          let todoId = req.params.id;
          await ToDo.destroy({ id: todoId });
          return res.redirect('/todo');
        } catch (err) {
          return res.serverError(err);
        }
      }
  };
  