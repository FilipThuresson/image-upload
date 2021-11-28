import dbConnect from '../../lib/dbConnect'
import Image from '../../models/Image'


export default async function handler(req, res) {

    await dbConnect()

    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    const body = JSON.parse(req.body);

    const img = body.image
    let db_data = {
      name : "john doe",
      desc : "image",
      img : img
    }
    const image = new Image(db_data)
    image.save(function (err) {
      if (err) return handleError(err);
      console.log("Uploaded image to database");
    });

    res.status(202).send({message : image})
  }
  