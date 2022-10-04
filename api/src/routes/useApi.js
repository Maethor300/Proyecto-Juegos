require('dotenv').config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const {Videogame,gender} = require("../db.js"); 
const { response } = require('express');
const {YOUR_API_KEY} = process.env;

router.get("/", (req,res)=> {
    axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`)
    .then(response => res.status(202).send(response.data))
    .catch(res.status(404))
})

router.get("/search", async(req,res)=>{
    let { name } = req.query
    try {
        if(name){
           const apiOriginal = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&search=${name}`)
           let json1 = await apiOriginal.data.results;
           let recorrer = json1.filter(i => i.name === name);
           return res.status(200).send(recorrer);
        }else{
            res.status(404).json({error: "Please a Name"})
        }
    }catch(error){
        res.status(404).json({error: error.toString()})
    }
})
router.get("/:id", async (req,res)=> {
    let {id} = req.params;
    try {
        let info= []
    let apiOriginal = await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`);
    let json1 = await apiOriginal.data;
    info.push(json1)
    let recorrer = info.map(e => ({
            image:e.background_image,
            nombre:e.name,
            genres:e.genres
    }))
    res.status(200).send(recorrer)
    }
    catch(error){
        res.status(404).json({error: error.toString()})
    }
})
router.post("/", async (req,res)=>{
    try {
    const {name, description, date, rating, platforms } = req.body;
    const newCharacter = await Videogame.create({
        name,
        description,
        date,
        rating,
        platforms
    })
   res.status(200).json(newCharacter)}
   catch(error){
    res.status(404).json({error: error.toString()})
   }
})



module.exports = router;