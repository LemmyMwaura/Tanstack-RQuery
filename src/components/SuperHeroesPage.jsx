import { useState, useEffect } from "react"
import axios from "axios";

export default function SuperHeroesPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios
        .get("http://localhost:4000/superheroes")
        .catch((e) => console.log(e))
      setData(data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2 className="title">SuperHeroes Page</h2>
      {isLoading ? (
        <div>Data is loading</div>
      ) : (
        data.map((hero) => {
          return <div key={hero.id}>{hero.name}</div>
        })
      )}
    </div>
  )
}
