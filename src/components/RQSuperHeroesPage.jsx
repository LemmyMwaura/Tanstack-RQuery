import { useSuperHeroesData } from "../hooks/useSuperHeroesData"
import { useState } from "react"

export default function RQSuperHeroespage() {
  const [interval, setInterval] = useState(3000)
  const onSuccess = ({ data }) => {
    console.log("Perform side effect after data fetching", data)
    if (data?.length >= 4) {
      setInterval(0)
    }
    setInterval(0)
  }

  const onError = (error) => {
    console.log("Perform side effect after encoutering error", error)
    setInterval(0)
  }

  const { isLoading, isError, error, data } = useSuperHeroesData(
    onSuccess,
    onError,
    interval
  )

  return (
    <div>
      <h2 className="title">RQ Super Heroes Page</h2>
      {/* <button onClick={refetch}>Fetch Heroes</button> */}

      {isError && <div>{error.message}</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        // data?.data.map((hero) => {
        //   return <div key={hero.id}>{hero.name}</div>
        // })
        data.map((heroName) => {
          return <div key={heroName}>{heroName}</div>
        })
      )}
    </div>
  )
}
