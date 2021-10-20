import express from 'express'

import mongoose from 'mongoose'

const app = express()

app.use(express.json({ limit: '10mb', extended: true }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.get('/:id', (req, res) => {
    const { shart } = req.query
    console.log(req.query)
    console.log(req.params)
    if (shart === 'true') {
        res.status(200).json({
            message: 'successful',
            name: 'parham',
            codename: 'mamad',
            family: 'roshan'
        })
    } else{
        res.status(404).json({
            message : 'failed'
        })
    }
})


app.listen(3000, () => {
    console.log('server is started on port 3000')
})

