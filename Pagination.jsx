import React , {useContext} from 'react'
import {AppContext} from '../context/AppContext';
import { useState } from 'react';

function Pagination() {
  const {page, handlePageChange, totalpage} = useContext(AppContext);

  return (
    <div>
      <div>
        <div>
          {
            page>1 && (<button onClick={()=>handlePageChange(page-1)}>Previous</button>) 
          }
          {
            page <totalpage && (<button onClick={()=>handlePageChange(page+1)}>Next</button>)
          }
        </div>
        <p> Page {page} of {totalpage}</p>
      </div>
    </div>
  )
}

export default Pagination
