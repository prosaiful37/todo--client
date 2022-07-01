import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import React from "react";

const AddList = (list) => {
 
  return (
    
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
      </div>
    
  );
};

export default AddList;
