import { DataTable } from '@edx/paragon';
import React,  {useState, useEffect} from 'react';
import GhibliApiService from '../services/ghibliApi';

const GhibliMovies = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    let mounted = true
    GhibliApiService.getList().then((data) => {
      if(mounted) {
        setMovies(data)
        console.log(data)
      }
      return () => mounted = false;
    })
  },[])

  return (
    <>
      <h1>useEffect</h1>

      <DataTable
        data={movies}
        columns={[
          {Header: 'Title',
          accessor:'title'},
          {
            Header: 'Director',
            accessor: 'director',
          },{
            Header: 'Release date',
            accessor: 'release_date',
          }
        ]}
        itemCount={movies.length}
        isPaginated
        isSortable
        initialState={{
          pageSize: 10,
          pageIndex: 0
        }}
      />
    </>
  )
};

export default GhibliMovies
