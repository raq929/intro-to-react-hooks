import React from 'react';
import StatefulButton from './examples/StatefulButton';
import GhibliMovieCard from './examples/MovieFacts';
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
