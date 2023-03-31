const express = require('express');
const router = express.Router();
const Employer = require('../models/employer');

// GET /api/employers
router.get('/', async (req, res) => {
    // this is old mongoose 6.x syntax
    // Employer.find((err, employers) => {
    //     if (err) {
    //         res.json(err).status(400);
    //     }
    //     res.json(employers).status(200);
    // });

    // this is new mongoose 7.x syntax
    try {
        const employers = await Employer.find().sort('name');
        return res.json(employers).status(200);
    } catch (err) {
        return res.json(err).status(400);
    }
});

router.post('/', async (req, res) => {
    try {
        const employer = await Employer.create(req.body);
        return res.json(employer).status(201);
    } catch (err) {
        return res.json(err).status(400);
    }
});

router.delete('/:_id', async (req, res) => {
    try {
        const employer = await Employer.findByIdAndDelete(req.params._id);
        return res.json(employer).status(204);
    } catch (err) {
        return res.json(err).status(400);
    }
});

router.put('/:_id', async (req, res) => {
    try {
        const employer = await Employer.findByIdAndUpdate(req.params._id, req.body);
        return res.json(employer).status(202);
    } catch (err) {
        return res.json(err).status(400);
    }
});
module.exports = router;