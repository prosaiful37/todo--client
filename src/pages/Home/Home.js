import React, { useEffect, useState } from "react";
import {  PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import AddList from "./AddList/AddList";

const Home = () => {
  const [itemText, setItemText] = useState('');
  //add to do item to database

  const additem = async() =>{
    try{
      const res => await axios.post();
    }
    catch(err){
      console.log(err);
    }
  }


  return (
    <div className="bg-primary">
      <div class="hero min-h-screen ">
        <div class="hero-content">
          <div class="drop-shadow-md bg-secondary p-5 rounded">
            <form action="">
              <label class="input-group text-black">
                <input
                  type="text"
                  placeholder="Add item ..."
                  class="input input-bordered input-primary w-full max-w-xs"
                  onChange={e => {setItemText(e.target.value)}} value={itemText}
                />
                <button class="btn btn-primary">Add</button>
              </label>
            </form>

            <div className="todo-list-item mt-5">
              <div className="todo-item bg-white rounded p-5">
            
                <p className="text-black">
                <input className="mr-3 " type="checkbox" />
                  This is item 1{" "}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
