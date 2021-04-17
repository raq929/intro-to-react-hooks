import React from 'react';
import { DataTable } from '@edx/paragon';

const MovieTable = ({ movies }) => {
  return (<DataTable
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
  />)
}

export default MovieTable;
