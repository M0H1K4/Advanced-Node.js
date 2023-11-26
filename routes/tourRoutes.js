const fs = require('fs');
const express = require('express')

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );

const getAllTours = (req, res) => {
    console.log(req.requestTime);
    res.status(200).json({
      status: 'succes',
      requestedAt: req.requestTime,
      results: tours.length,
      data: {
        tours,
      },
    });
  };
  
  const getTour = (req, res) => {
    console.log(req.params);
    // convert string to number by |*1|
    const id = req.params.id * 1;
    const tour = tours.find((el) => el.id === id);
  
    // if (id > tours.length) {
    if (!tour) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });
    }
    res.status(200).json({
      status: 'succes',
      data: {
        tour,
      },
    });
  };
  
  const creatTour = (req, res) => {
    // console.log(req.body);
    // To add new tour in the Tours obj
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
  
    tours.push(newTour);
  
    fs.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours),
      (err) => {
        // 201 means created
        res.status(201).json({
          status: 'success',
          data: {
            tour: newTour,
          },
        });
      }
    );
  };
  
  const updateTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        tour: '<Updated tour here ...',
      },
    });
  };
  
  const deleteTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });
    }
    // 204 status is delete status(NO CONTENT)
    res.status(204).json({
      status: 'success',
      data: null,
    });
  };

const router = express.Router();


router.route('/').get(getAllTours).post(creatTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;