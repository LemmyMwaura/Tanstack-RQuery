import { useQuery } from "react-query"
import axios from "axios"
import { useState } from "react"

export default function RQSuperHeroespage() {
  const [interval, setInterval] = useState(3000)
  const onSuccess = ({ data }) => {
    console.log('Perform side effect after data fetching', data)
    if(data?.length >= 4){
      setInterval(0)
    }
    setInterval(0)
  }

  const onError = (error) => {
    console.log('Perform side effect after encoutering error', error)
    setInterval(0)
  }

  const { isLoading, isError, error, data } = useQuery("super-heroes", () => {
    return axios
      .get("http://localhost:4000/superheroes")
  },
  {
    // cacheTime: 5000000,
    // staleTime:0,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    refetchInterval:interval, //NB stops when browser losses focus
    // refetchIntervalInBackground: true, //When sets to true, Keeps fetching data even when the browser loses focus
    // enabled:false //Fetch on user request e.g click of a button
    onSuccess,
    onError,
    select: (data) => {
      //Select performs data transformation and also data filtering
      const superheroesNames = data.data.map(hero => hero.name)
      return superheroesNames
    }
  })
  
  return (
    <div>
      <h2 className="title">RQ Super Heroes Page</h2>
      {/* <button onClick={refetch}>Fetch Heroes</button> */}

      {isError && (
        <div>{error.message}</div>
      )}

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
