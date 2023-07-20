import React, { useEffect, useState } from 'react'
import {Table} from 'antd'
import axios from 'axios'

const DataList = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

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
        rowKey='id'
        dataSource={data}
        columns={columns}
        loading={loading}
        onRow={(record) => {
          return {
            onClick: () => alert(record.title)
          }
        }}
      />;
    </div>
  )
}

export default DataList