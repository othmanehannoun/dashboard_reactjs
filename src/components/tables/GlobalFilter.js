import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
  return (
    <span>
      search: {' '}
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder={`records...`}
        style={{
          fontSize: '1.1rem',
          border: '1 solid black',
          padding: '5px 10px',
          width: "100%"
        }}
      />
    </span>
  )
}
