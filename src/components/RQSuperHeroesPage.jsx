import { useQuery } from "react-query"
import axios from "axios"

export default function RQSuperHeroespage() {
  const { isLoading, isError, error, data } = useQuery("super-heroes", () => {
    return axios
      .get("http://localhost:4000/superheroes")
  })
  
  return (
    <div>
      <h2 className="title">RQ Super Heroes Page</h2>

      {isError && (
        <div>{error.message}</div>
      )}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.data.map((hero) => {
          return <div key={hero.id}>{hero.name}</div>
        })
      )}
    </div>
  )
}
