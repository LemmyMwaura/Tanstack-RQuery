import { useSuperHeroesData } from "../hooks/useSuperHeroesData"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function RQSuperHeroespage() {
  const [interval, setInterval] = useState(3000)
  const navigate = useNavigate()

  const onSuccess = ({ data }) => {
    console.log("Perform side effect after data fetching")

    if (data?.length >= 4) {
      setInterval(0)
    }
  }

  const onError = (error) => {
    console.log("Perform side effect after encoutering error", error)
    setInterval(0)
  }

  const { isLoading, isError, error, data } = useSuperHeroesData(
    onSuccess,
    onError,
    interval,
    true,
    true
  )

  return (
    <div>
      <h2 className="title">RQ Super Heroes Page</h2>

      {isError && <div>{error.message}</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.data.map((hero) => {
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
