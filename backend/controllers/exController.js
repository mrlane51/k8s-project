const Input = require('../models/modelEx')

const getEx = async (req, res) => {
    const userInput = await Input.find()
    res.status(200).json(userInput)
}

const postEx = async (req, res) => {
    if (!req.body.text) {
        res.status(404) 
        throw new Error('Invalid Entry, Try Again')
    }
        const userInput = await Input.create({
        text: req.body.text
    })
    res.status(200).json(userInput)
}

// update and override data
const putEx = async (req, res) => {
    const userInput = await Input.findById(req.params.id)

    if (!userInput) {
        res.status(404) 
        throw new Error('Invalid Entry, Entry does not exist')
    }
    const updateInput = await Input.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json({message: `Updated Input ${req.params.id}` })
}

const deleteEx = async (req, res) => {
    const userInput = await Input.findById(req.params.id)

    if (!userInput) {
        res.status(404) 
        throw new Error('Invalid Entry, Try Again')
    }
    await Input.remove()
    res.status(200).json({ id: req.params.id })
}



module.exports = {
    getEx,
    postEx,
    putEx,
    deleteEx,
}