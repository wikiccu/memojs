import express from 'express'
const router = express.Router()
const db = [{
    id : 1,
    name : 'parham',
    family : 'roshan',
    age : '15',
    city : 'ramsar'
},
{
    id : 2,
    name : 'alireza',
    family : 'hosseyni sabet',
    age : '15',
    city : 'ramsar'
},
{
    id : 3,
    name : 'saeed',
    family : 'rostami',
    age : '30',
    city : 'amesterdam'


}]

router.get('/findByCity/:city', (req, res) => {
    const {city}= req.params
let place=[]
for (let i = 0; i < db.length; i++) {
  if(city===db[i].city){
      place.push(db[i])
}
}
res.status(200).json(place)

})

router.get('/findByAge/:age', (req, res) => {
    const {age}= req.params
let place1=[]
for (let i = 0; i < db.length; i++) {
if(age===db[i].age){
    place1.push(db[i])
}
}
res.status(200).json(place1)
})

export default router