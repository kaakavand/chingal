import React from "react";
import { Link } from "react-router-dom";

interface objType {
    label : string,
    route: string
}

const Breadcrumb = ({ list } : {list : objType[]}) => {
  return (
    <div className="py-4 flex gap-4">
      {list.map((el , i) => (
        <div className="flex items-center">
          <span></span>
          <Link key={"d"} to={el?.route} className={`${i !== list.length-1 ? 'text-surface-400' : 'text-surface-900'}   text-lg mr-2`}>
            {el.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
