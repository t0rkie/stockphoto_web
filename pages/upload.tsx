import axios from "axios"
import React from "react"
import FD, { Headers } from "form-data"

const UploadPhoto = () => {

  const handleSubmit = (event: any) => {
    event.preventDefault()
    // const data = new FormData()
    const data = new FD()
    const headers = new Headers()
    headers.
  
    // const config = { headers: {'Content-Type': `multipart/form-data; boundary=${data._boundary}`} };
    const config = { headers: { 'Content-Type': `multipart/form-data;` }}

    // const data = new FormData(event.currentTarget);

    data.append("image", event.currentTarget["image"].files[0])
    data.append("photoPrice", event.currentTarget["photoPrice"].value);
    data.append("description", event.currentTarget["description"].value)
    
    const params = new URLSearchParams(data as any)
    axios
      .post("http://localhost:8080/api/photo/store",params, config)
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