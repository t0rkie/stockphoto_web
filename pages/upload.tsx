import axios from "axios"
import React from "react"

const UploadPhoto = () => {

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(event.currentTarget.value)
    console.log(event.target.value)
    // multipart/form-data形式からapplication/x-www-form-urlencodedへ
    const data = new FormData(event.currentTarget);
    // const data = new FormData()
    // data.append("")
    console.log(data.getAll("photoPrice"))
    const params = new URLSearchParams(data as any)
    axios.post("http://localhost:8080/api/photo/store", params)
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
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