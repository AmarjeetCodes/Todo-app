import React from "react";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { baseURL } from "../utils/constant"; 

const ToDo = ({ text, id, setUpdateUI }) => {
  const deleteTodo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <AiFillEdit className="icon" />
        <RxCross2 className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default ToDo;
