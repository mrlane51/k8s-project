const express = require('express');
const router = express.Router();
const {
    getEx,
    postEx,
    putEx,
    deleteEx,
} = require ('../controllers/exController');

router.get('/', getEx )

router.post('/', postEx )

router.put('/:id', putEx )

router.delete('/:id', deleteEx )

module.exports = router;