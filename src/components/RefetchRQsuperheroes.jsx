import { useSuperHeroesData } from "../hooks/useSuperHeroesData"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function RefetchRQsuperheroes() {
  const [interval] = useState(false)
  const [enabled] = useState(false)
  const navigate = useNavigate()

  const onSuccess = ({ data }) => {
    console.log("Perform side effect after data fetching")
  }

  const onError = (error) => {
    console.log("Perform side effect after encoutering error", error)
  }

  const { isLoading, isError, error, data, refetch } = useSuperHeroesData(
    onSuccess,
    onError,
    interval,
    false,
    enabled
  )

  return (
    <div>
      <h2 className="title">RQ Super Heroes Page</h2>
      <button className="btn" onClick={refetch}>
        Fetch Heroes
      </button>

      {isError && <div>{error.message}</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.data?.map((hero) => {
          return (
            <div
              className="superhero-link"
              key={hero.id}
              onClick={() => navigate(`/rq-super-heroes/${hero.id}`)}
            >
              {hero.name}
            </div>
          )
        })
      )}
    </div>
  )
}
