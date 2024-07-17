import React from 'react'


function cards({item}) {
    console.log(item);
  return (
    <>
    <div className='mt-4 my-3'>
    <div className="card bg-base-100 w-80 shadow-xl">
  <figure>
    <img 
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-700 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default cards