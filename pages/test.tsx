import React, { useState } from "react"
import Resizer from "react-image-file-resizer";
import Image from "next/image"

const InputImage = () => {
  const [image, setImage] = useState<string | null>(null)

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

  const onChange = async(event: any) => {
    try {
      const file = event.target.files[0]
      const image = await resizeImage(file)
      setImage(image)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <input type="file" onChange={onChange} />
      {image && <Image src={image} width={300} height={300} alt="test" />}
    </>
  )
}

export default InputImage