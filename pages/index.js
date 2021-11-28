import { useState } from "react";
export default function Home() {

  const [img, setImg] = useState();

  function getBase64(file){
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImg(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  async function uploadFile(file){
    var fileData = {
      image : file
    }
    await fetch('/api/uploadImg', {
      method: "POST",
      body : JSON.stringify(fileData)
    }).then(response => response.json())
    .then(response=>{
      console.log(response);
    })
  }

  return (
    <div>
      <input type="file" onChange={e=>getBase64(e.target.files[0])}  accept="image/*" />
      <br />
      <button onClick={()=>uploadFile(img)}>Upload!</button>
      <br />
      <img style={{width : 50 +'%'}} src={img} alt="Ladda upp en bild" />
    </div>
  )
}
