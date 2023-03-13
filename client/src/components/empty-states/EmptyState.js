import React from 'react'

const EmptyState = ({img, title, desc}) => {
  return (
    <div className="d-flex flex-column flex-row-fluid text-center my-12">
      <div>
        <img src={img} className="max-w-100 mb-5" alt={title} />
        <p className="font-size-h3 text-dark font-weight-bolder">{title}</p>
        <p className="font-size-lg text-dark-25 font-weight-bolder">{desc}</p>
      </div>
    </div>
  )
}

export default EmptyState;
