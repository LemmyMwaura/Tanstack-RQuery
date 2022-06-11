import React from 'react'
import { superHeroData } from '../hooks/useSuperHeroData'
import { useParams } from 'react-router-dom';

export default function RQSuperhero() {
  const { heroId } = useParams()
  const {data, isLoading, isError, error} = superHeroData(heroId)
 
  return (
    <div>
      <h2 className="title">Super Hero Details</h2>

      {isError && <div>{error.message}</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
         <div>{data?.data.name} - {data?.data.alterEgo}</div>
      )}
    </div>
  )
}
