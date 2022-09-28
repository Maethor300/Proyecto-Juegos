require('dotenv').config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const {Gender} = require("../db.js"); 
const {YOUR_API_KEY} = process.env;
router.get("/",async (req,res)=> {
    try { 
 
    const apiOriginal = await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`)
    const json1 = await apiOriginal.data.results;
    let recorrer = json1.map(e =>({
        name:e.name
    }))
    const agregar = await Gender.bulkCreate(recorrer);
    res.status(200).json(agregar) }catch(error) {
       res.status(404).json({error: error.toString()});
    }
})
module.exports = router;