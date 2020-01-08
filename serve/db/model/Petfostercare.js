const mongoose = require('mongoose')

let PetFostcareSchema = mongoose.Schema({
    shop:{type:String,require:true},
    bigclass:{type:String,require:true},
    smallclass:{type:String,require:true},
    name:{type:String,require:false},
    barcode:{type:Number,require:false},
    price:{type:Number,require:false},
    sallprice:{type:Number,require:false},
    cleandifficulty:{type:String,require:false},
    Productnumber:{type:Number,require:false},




})

let PetFostcareModel = mongoose.model('Petfoster',PetFostcareSchema)

module.exports = PetFostcareModel
