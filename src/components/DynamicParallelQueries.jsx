import { useQueries } from "react-query"
import axios from "axios"

const fetchSuperHero = (heroid) => {
  return axios.get(`http://localhost:4000/superheroes/${heroid}`)
}

const DynamicParallelQueries = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      }
    })
  )

  return (
    <div>
      <h2 className="title">Dynamic Parallel Queries</h2>
      {queryResults?.map((result, index) => {
        return <div key={index}>{result?.data?.data.name}</div>
      })}
    </div>
  )
}

export default DynamicParallelQueries
