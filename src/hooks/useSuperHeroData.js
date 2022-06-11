import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHero = (heroid) => {
  return axios.get(`http://localhost:4000/superheroes/${heroid}`)
}

export const superHeroData = (heroid) => {
  return useQuery(['super-hero', heroid], () => fetchSuperHero(heroid))
}