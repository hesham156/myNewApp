const express = require('express')
const router = express.Router()
let cat = {
  name:"max",
  age:13,
  price:20,
  adders:"cairo"
}
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/get', (req, res) => {
  return res.status(200).json(cat)
})
// define the about route
router.post('/add', (req, res) => {
  var result ="welcome "+ req.body.num1+" "+req.body.num2
  res.send(result)
})

module.exports = router