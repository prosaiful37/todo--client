import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
// import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import AddList from "./AddList/AddList";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/list")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  //add to do item to database

  const handleAddSubmit = (event) => {
    event.preventDefault();

    const item = event.target.list.value;

    const list = { item };

    //list add to server
    const url = `http://localhost:5000/list`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(list),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-primary">
      <div class="hero min-h-screen ">
        <div class="hero-content flex flex-col">
          <div class="drop-shadow-md bg-secondary p-5 rounded">
            <form onSubmit={handleAddSubmit} action="">
              <label class="input-group text-black">
                <input
                  name="list"
                  type="text"
                  placeholder="Add item ..."
                  class="input input-bordered input-primary w-full max-w-xs"
                />
                <button class="btn btn-primary">Add</button>
              </label>
            </form>

            
                
              
          </div>

          <div className="drop-shadow-md bg-secondary p-5 rounded">
          {
            items.map(list => 
            <div className="todo-list-item mt-5">
            <div className="todo-item bg-white rounded p-5">
                <p className="text-black">
                  <input className="mr-3 " type="checkbox" />
                  {list.item}{" "}
                  <span className="text-right m-5">
                    <button>
                      {" "}
                      <PencilAltIcon className="h-5 w-5 text-black" />
                    </button>
                  </span>
                  <span>
                    <button>
                      {" "}
                      <TrashIcon className="h-5 w-5 text-black" />
                    </button>
                  </span>
                </p>
                </div>
              </div>)
          }
          </div>

          
          {/* {items.map((list) => (
                  <AddList list={list} key={list._id}></AddList>
                ))} */}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
