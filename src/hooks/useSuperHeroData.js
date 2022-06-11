import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHero = ({ queryKey }) => {
  const heroid = queryKey[1]
  return axios.get(`http://localhost:4000/superheroes/${heroid}`)
}

export const superHeroData = (heroid) => {
  const queryClient = useQueryClient()
  
  return useQuery(['super-hero', heroid], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient.getQueryData('super-heroes')?.data?.find((hero) => {
        return hero.id === parseInt(heroid)
      })

      if(hero){
        return { data: hero }
      } else return undefined;
    }
  })
}
