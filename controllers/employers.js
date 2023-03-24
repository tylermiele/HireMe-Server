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
        const employers = await Employer.find();
        return res.json(employers).status(200);
    } catch (err) {
        return res.json(err).status(400);
    }
});


module.exports = router;