const getEx = (req, res) => {
    res.status(200).json({ message: 'Get Example'})
}
const postEx = (req, res) => {
res.status(200).json({ message: 'POST example'})
}

const putEx = (req, res) => {
    res.status(200).json({ message: `PUT example ${req.params.id}` })
}

const deleteEx = (req, res) => {
    res.status(200).json({ message: `DELETE example ${req.params.id}` })
}



module.exports = {
    getEx,
    postEx,
    putEx,
    deleteEx,
}