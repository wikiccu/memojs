import express from 'express'
const router = express.Router()
import db from './db.json'
router.get('/cars', (req, res) => {
    let cars = []
    for (let i = 0; i < 500; i++) {
        cars.push({
            carName: db[i].car,
            company: db[i].manufacturer
        })
    }
    res.status(200).json(cars)
})

export default router