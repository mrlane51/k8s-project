const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'GET example'})
})

router.post('/', (req, res) => {
    res.status(200).json({ message: 'POST example'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `PUT example ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `DELETE example ${req.params.id}` })
})

module.exports = router;