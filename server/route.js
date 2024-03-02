const express = require ('express')
const router = express.Router()
router.get('/get',(req,res)=>{
    res.send("It is a get request")
})
router.put('/put',(req,res)=>{
    res.send("It is a put request")
})
router.patch('/patch',(req,res)=>{
    res.send("It is a patch request")
})
router.delete('/delete',(req,res)=>{
    res.send("It is a delete request")
})

module.exports = router;