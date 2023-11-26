const express = require('express')

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is not yes defined',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is not yes defined',
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is not yes defined',
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is not yes defined',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is not yes defined',
  });
};

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
