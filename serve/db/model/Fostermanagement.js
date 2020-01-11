const mongoose = require('mongoose')

let  FosterManagementSchema = mongoose.Schema({
  shop:{type:String,require:true},
  peoplename:{type:String,require:true},
  telephpne:{type:Number,require:true},
  petnane:{type:String,require:false},
  class:{type:String,require:false},
  Coatcolor:{type:String,require:false},
  room:{type:String,require:false},
  weight:{type:String,require:false},
  sex:{type:String,require:false},
  age:{type:Number,require:false},
  fosternum:{type:String,require:false},
  food:{type:Boolean,require:false},
  img:{type:String,require:false},


})

let FosterManagementModel = mongoose.model('Fostermanagement',FosterManagementSchema)

module.exports = FosterManagementModel