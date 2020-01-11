const mongoose = require('mongoose')
let CosmetologySchema = mongoose.Schema({
  shop:{type:String,require:true},
  bigclass:{type:String,require:true},
  smallclass:{type:String,require:true},
  name:{type:String,require:false},
  barcode:{type:Number,require:false},
  price:{type:Number,require:false},
  sallprice:{type:Number,require:false},
  cleandifficulty:{type:String,require:false},
  Uppershelf:{type:Boolean,require:false},
  Productnumber:{type:Number,require:false},
  img:{type:String,require:false},



})

let CosmetologyModel = mongoose.model('Cosmetology',CosmetologySchema)
module.exports = CosmetologyModel