import React from 'react'
const Filter = ({filterData}) => {
    return (
        <div>
         {filterData.map((filter) => (
        <div key={filter.id}>{filter.title}</div>
      ))}
    </div>
    )
}
export default Filter