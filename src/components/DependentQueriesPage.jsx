import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelId = (channelID) => {
  return axios.get(`http://localhost:4000/channels/${channelID}`)
}

const DependentQueriesPage = ({ email }) => {
  const {data: user} = useQuery(['user', email] ,() => fetchUserByEmail(email))
  const channelID = user?.data.channelId

  const {data: courses} = useQuery(['courses', channelID], () => fetchCoursesByChannelId(channelID),{
    enabled: !!channelID,
  })

  return (
    <div>
      <h2 className="title">
        DependentQueriesPage
      </h2>

      {!!channelID &&
        courses?.data.courses.map((course, index) => {
          return <div key={index}>{course}</div>
        })
      }
    </div>
  )
}

export default DependentQueriesPage