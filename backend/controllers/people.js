const express = require ("express")

// we can use 'object de-structuring' to access just the model we need for this controller
const {People} = require("../models/People")


async function index(req, res, next){
    try{
        res.json(await People.find())
    }catch (error){
        res.status(400).json(error)
    }
}


async function create(req, res, next){
    try{
        res.json(await People.create(req.body))
    }catch (error){
        res.status(400).json(error)
    }
}


async function show(req, res, next){
    try{
        res.json(await People.findById(req.params.id))
    }catch (error){
        res.status(400).json(error)
    }
}


async function update(req, res, next){
    try{
        res.json(await People.findBtIdAndUpdate(req.params.id, req.body, {new:true}))
    }catch (error){
        res.status(400).json(error)
    }
}


async function destroy(req, res, next){
    try{
        res.json(await People.findByIdAndDelete(req.params.id))
        
    }catch (error){
        res.status(400).json(error)
    }
}


module.exports = {
    index, 
    show, 
    create, 
    update, 
    delete: destroy
}