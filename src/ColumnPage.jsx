import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import DataContext from './context/DataContext';
import Columns from './Columns';
import MissingPage from './MissingPage';

const ColumnPage = () => {
    const { columnId } = useParams();
    const { columns } = useContext(DataContext);
    const column = columns.find(column => column.id === columnId);

    //Skickar en till missingpage om url är fel
    if (!column) {
      return <MissingPage/>;
    }

  return <Columns id={column.id} title={column.title}/>
}

export default ColumnPage