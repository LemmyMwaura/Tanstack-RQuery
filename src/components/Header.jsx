import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Homepage from './HomePage';
import SuperHeroesPage from './SuperHeroesPage';
import RQSuperHeroespage from './RQSuperHeroesPage'
import RefetchRQsuperheroes from './refetchRQsuperheroes';
import RQSuperhero from './RQSuperhero';
import ParallelQueriesPage from './ParallelQueriesPage';
import DynamicParallelQueries from './DynamicParallelQueries';
import DependentQueriesPage from './DependentQueriesPage';
import PaginatedQueries from './PaginatedQueries';

export default function Header() {
  return (
    <div className='header'>
      <nav className='primary-nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/super-heroes'>Traditional SuperHeroes</NavLink>
        <NavLink to='/rq-super-heroes'>RQ SuperHeroes</NavLink>
        <NavLink to='/refetch-rq-super-heroes'>RefetchRQHeroesOnClick</NavLink>
      </nav>

      <nav className='primary-nav'>
        <NavLink to='/rq-parallel'>Parallel Queries</NavLink>
        <NavLink to='/rq-dynamic-parallel'>Dynamic Parallel Q</NavLink>
        <NavLink to='/rq-dependent'>Dependent Queries</NavLink>
        <NavLink to='/rq-paginated'>Paginated Queries</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/rq-parallel' element={<ParallelQueriesPage/>}/>
        <Route path='/rq-dynamic-parallel' element={<DynamicParallelQueries heroIds={[1,3]}/>}/>
        <Route path='/rq-dependent' element={<DependentQueriesPage email="lemminton@gmail.com"/>}/>
        <Route path='/rq-paginated' element={<PaginatedQueries/>}/>

        <Route path='/super-heroes' element={<SuperHeroesPage/>}/>
        <Route path='/rq-super-heroes' element={<RQSuperHeroespage/>}/>
        <Route path='/refetch-rq-super-heroes' element={<RefetchRQsuperheroes/>}/>
        <Route path='/rq-super-heroes/:heroId' element={<RQSuperhero/>}/>
      </Routes>
    </div>
  )
}
