import React, { useEffect, useState } from "react";
import axios from "axios";

function Cards() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/")
      .then((response) => setItems(response.data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {items.map((item) => (
        <div key={item._id} className="mt-4 my-3">
          <div className="card bg-base-100 w-80 shadow-2xl p-5 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <figure>
              <img src={item.image} alt={item.name} />
            </figure>
            <div className="card-body dark:bg-slate-900 dark:text-white">
              <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">{item.category}</div>
              </h2>
              <p>{item.title}</p>
              <div className="card-actions justify-between">
                <div className="badge badge-outline">${item.price}</div>
                <div className="badge badge-outline hover:bg-pink-700 hover:text-white">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
