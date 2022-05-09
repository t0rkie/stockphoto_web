import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [photoList, setPhotList] = useState([])

  useEffect(() => {
    getPhotoList()

  }, [])

  const getPhotoList = () => {
    axios
      .get('http://localhost:8080/api/photo/index')
      .then(res => {
        setPhotList(res.data)
      })
      .catch(() => {
        console.log('通信に失敗しました')
      })
  }
  return (
    <div className={styles.container}>
      {/* Header */}
      <header>
        <div>メニュー</div>
        <div>StockPhoto</div>
        <div>サインイン</div>
      </header>
      {/* Search */}
      <div>

      </div>
      {/* PhotoList */}
      <div>
        {
          photoList.length !== 0 && photoList.map((photo, i)=> {
            const base64Image = photo["image"]
            const src = "data:image/png;base64," + base64Image
            return (
              <img key={i} src={src} alt="写真" />
            )
          })
        }
      </div>
    </div>
  )
}

export default Home