import React from 'react';
import StatefulButton from './finished/StatefulButton';
import GhibliMovieCard from './finished/MovieFacts';
import UsefulLinks from './UsefulLinks';

const MainPage = () => {
  return (
    <>
    <h1>Hooks!</h1>
    <StatefulButton />
    <GhibliMovieCard />

    <UsefulLinks />
    </>
  )
}

export default MainPage;
