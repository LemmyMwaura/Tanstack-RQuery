import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Homepage from './HomePage';
import SuperHeroesPage from './SuperHeroesPage';
import RQSuperHeroespage from './RQSuperHeroesPage'
import RefetchRQsuperheroes from './refetchRQsuperheroes';
import RQSuperhero from './RQSuperhero';

export default function Header() {
  return (
    <div>
      <nav className='primary-nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/super-heroes'>SuperHeroes</NavLink>
        <NavLink to='/rq-super-heroes'>RQ SuperHeroes</NavLink>
        <NavLink to='/refetch-rq-super-heroes'>RefetchRQHeroesOnClick</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/super-heroes' element={<SuperHeroesPage/>}/>
        <Route path='/rq-super-heroes' element={<RQSuperHeroespage/>}/>
        <Route path='/refetch-rq-super-heroes' element={<RefetchRQsuperheroes/>}/>
        <Route path='/rq-super-heroes/:heroId' element={<RQSuperhero/>}/>
      </Routes>
    </div>
  )
}
