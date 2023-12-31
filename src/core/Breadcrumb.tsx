import React from "react";
import { Link } from "react-router-dom";

interface objType {
  label: string;
  route: string;
}

const Breadcrumb = ({ list }: { list: objType[] }) => {
  return (
    <div className="py-4 flex gap-4">
      {list.map((el, i) => (
        <div className="flex items-center">
          <svg
            width="9"
            height="18"
            viewBox="0 0 9 18"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              d="M7.99979 17.67C7.80979 17.67 7.61979 17.6 7.46979 17.45L0.949785 10.93C-0.110215 9.87002 -0.110215 8.13002 0.949785 7.07002L7.46979 0.55002C7.75979 0.26002 8.23979 0.26002 8.52979 0.55002C8.81979 0.84002 8.81979 1.32002 8.52979 1.61002L2.00979 8.13002C1.52979 8.61002 1.52979 9.39002 2.00979 9.87002L8.52979 16.39C8.81979 16.68 8.81979 17.16 8.52979 17.45C8.37979 17.59 8.18979 17.67 7.99979 17.67Z"
              className={i !== list.length - 1 ? "fill-surface-400" : "fill-surface-900"}
            //   className=""
            />
          </svg>
          <Link
            key={"d"}
            to={el?.route}
            className={`${i !== list.length - 1 ? "text-surface-400" : "text-surface-900"}   text-lg mr-2`}
          >
            {el.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
