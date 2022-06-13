import axios from "axios"
import { useQuery, useMutation, useQueryClient } from "react-query"

const fetchUserData = () => {
  return axios.get("http://localhost:4000/superheroes")
}

const addSuperHero = (herodetails) => {
  return axios.post("http://localhost:4000/superheroes", herodetails)
}

export const useSuperHeroesData = (onSuccess, onError, interval, window, enabled) => {
  return useQuery("super-heroes", fetchUserData, {
    // cacheTime: 5000000,
    // staleTime:0,
    refetchOnMount: window,
    refetchOnWindowFocus: window,
    refetchInterval: interval, //NB stops when browser losses focus
    // refetchIntervalInBackground: true, //When sets to true, Keeps fetching data even when the browser loses focus
    enabled, //Fetch on user request e.g click of a button
    onSuccess,
    onError,
    // select: (data) => {
    //   //Select performs data transformation and also data filtering
    //   const superheroesNames = data.data.map((hero) => hero.name)
    //   return superheroesNames
    // },
  })
}

export const useAddSuperHeroesData = () => {
  const queryClient = useQueryClient()
  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries('super-heroes')
    //   queryClient.setQueryData('super-heroes', (oldquerydata) => {
    //     return {
    //       ...oldquerydata,
    //       data:[...oldquerydata.data, data.data]
    //     }
    //   })
    // }

    //called before the mutation function is fired, receives the new hero the mutation function receives
    onMutate: async (newHero) => {
      await queryClient.cancelQueries('super-heroes')
      const previousHeroData = queryClient.getQueryData('super-heroes')
      queryClient.setQueryData('super-heroes', (oldquerydata) => {
        return {
          ...oldquerydata,
          data:[
            ...oldquerydata.data, 
            {id: oldquerydata?.data?.length + 1, ...newHero}
          ]
        }
      })
      return {
        previousHeroData,
      }
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData('super-heroes', context.previousHeroData)
    },
    onSettled: () => {
      queryClient.invalidateQueries('super-heroes')
    }
  })
}
