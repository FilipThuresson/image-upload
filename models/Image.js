import mongoose from 'mongoose'

const imageSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: {
    base64: String,
    imageFormat: String
  }
})

module.exports = mongoose.models.Images || mongoose.model('Images', imageSchema)