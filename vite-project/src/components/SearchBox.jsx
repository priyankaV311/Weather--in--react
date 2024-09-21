
import React from 'react'
import TextField from '@mui/material/TextField';

function SearchBox() {
  return (
    <div>
        <h1>Search for the weather</h1>
        <form action="">
        <TextField id="outlined-basic" label="City name" variant="outlined" />
        </form>
    </div>
  )
}

export default SearchBox