import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends")
}

export default function ParallelQueriesPage() {
  useQuery('super-heroes', fetchSuperheroes)
  useQuery('friends', fetchFriends)
  
  return (
    <div>
      <h2 className="title">
        ParallelQueriesPage
      </h2>
    </div>
  )
}
