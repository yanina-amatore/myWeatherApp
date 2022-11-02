import React from 'react'
import Search from './Search'


function App() {

  const handleOnSearchChange = (searchData) => {
    console.log('searchData', searchData)
  }

  return (
    <div className='app-container'>
      <div className='search-container'>
        <Search onSearchChange={handleOnSearchChange} />
      </div>
    </div>
  )
}
export default App

