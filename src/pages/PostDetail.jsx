import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Card } from 'antd';

const PostDetail = () => {
  const params = useParams();
  const [data, setData] = useState([])

  const getData = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (response.data) {
      console.log(response.data)
      setData({
        ...response.data
      })
    }
  }

  useEffect(() => {
    const paramId = params.id ?? ''
    getData(paramId)
  }, [params])

  const { body, title } = data

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height:'100vh',
    }}>

      <Card
        title={title}
        bordered={false}
        style={{
          width: 700,
        }}
      >
        <p>{ body }</p>
      </Card>
    </div>
  )
}

export default PostDetail