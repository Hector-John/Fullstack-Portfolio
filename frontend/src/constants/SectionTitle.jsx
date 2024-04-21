import React from 'react'

function SectionTitle ({
  title,
}){
  return (
    <div>
     <h2 className="title" style={{ color: '#08b2e3' }}>

        {title}
      </h2>
    </div>
  )
}

export default SectionTitle