import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Table} from 'antd'
import axios from 'axios'

const DataList = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
  ];

  const getData = async () => {
    setLoading(true)
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    if (response.data) {
      const list = response.data.map((item) => {
        return {
          ...item,
        }
      })
      console.log(list)
      setData(list)
    }
    setLoading(false)
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div>
      <Table
        style={{
          cursor: 'pointer',
        }}
        rowKey='id'
        dataSource={data}
        columns={columns}
        loading={loading}
        onRow={(record) => {
          return {
            onClick: () => navigate(`/posts/${record.id}`)
          }
        }}
      />;
    </div>
  )
}

export default DataList