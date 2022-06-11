import { useSuperHeroesData } from "../hooks/useSuperHeroesData"
import { useState } from "react"

export default function RefetchRQsuperheroes() {
  const [interval] = useState(false)
  const [enabled] = useState(false)

  const onSuccess = ({ data }) => {
    console.log("Perform side effect after data fetching", data)
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
      <button className="btn" onClick={refetch}>Fetch Heroes</button>

      {isError && <div>{error.message}</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((heroName) => {
          return <div key={heroName}>{heroName}</div>
        })
      )}
    </div>
  )
}
