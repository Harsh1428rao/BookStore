import React from 'react'


function cards({item}) {
    console.log(item);
  return (
    <>
    <div className='mt-4 my-3 '>
    <div className="card bg-base-100 w-80 shadow-2xl p-5 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img 
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body  dark:bg-slate-900 dark:text-white">
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
// It is used to create cards on the 
export default cards