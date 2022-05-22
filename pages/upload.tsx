import axios from "axios"
import React from "react"
import Resizer from "react-image-file-resizer";

const UploadPhoto = () => {

  const resizeImage = (file: Blob): Promise<string> => (
    new Promise(resolve => (
      Resizer.imageFileResizer(
        file,
        300,
        400,
        'JPEG',
        100,
        0,
        (uri) => {
          resolve(uri as string)
        },
        'blob'
      )
    ))
  )

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const photoPrice = event.currentTarget["photoPrice"].value
    const desc = event.currentTarget["description"].value
    const image = await resizeImage(event.currentTarget["image"].files[0])
    
    const data = new FormData()
  
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    data.append("image", image)
    data.append("photoPrice", photoPrice);
    data.append("description", desc)
    
    axios
      .post("http://localhost:8080/api/photo/store", data, config)
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)} encType="multipart/form-data">
        <input type="file" id="image" name="image" multiple />
        <br />
        <input type="number" id="photoPrice" name="photoPrice" />
        <br />
        <input type="text" id="description" name="description" />
        <br />
        <input type="submit" defaultValue={"Submit"} />
      </form>
    </div>
  )
}

export default UploadPhoto