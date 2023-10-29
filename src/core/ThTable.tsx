import React, { useState, useEffect } from "react";

const ThTable = ({
  id,
  onChange,
  title,
  value,
}: {
  id: string;
  onChange: Function;
  title: string;
  value: {key : string, order : boolean | undefined};
}) => {
  const [order, setOrder] = useState<{order : boolean | undefined}>({ order: undefined });
  const handleClick = () => {
    order.order === undefined
      ? onChange({ key: id, order: true })
      : order.order === true
      ? onChange({ key: id, order: false })
      : onChange({ key: id, order: undefined });
  };

  useEffect(() => {
    if (value.key === id) {
      setOrder({ order: value.order });
    } else {
      setOrder({ order: undefined });
    }
  }, [value]);

  return (
    <th
      scope="col"
      onClick={handleClick}
      className={`${
        order.order !== undefined && "bg-primary text-surface-900"
      } px-6 py-3 w-40 text-center border border-surface-300 hover:opacity-80 transition duration-200 cursor-pointer`}
    >
      <div className="flex justify-center items-center ">
        {title}
        {order.order !== undefined && (
          <div className="mr-2">
            <svg
              width="18"
              height="9"
              viewBox="0 0 18 9"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-3 h-3 transition duration-200 ${
                order.order === false && "rotate-180"
              }`}
            >
              <path
                d="M16.92 8.80002C16.73 8.80002 16.54 8.73002 16.39 8.58002L9.87002 2.06002C9.39002 1.58002 8.61002 1.58002 8.13002 2.06002L1.61002 8.58002C1.32002 8.87002 0.84002 8.87002 0.55002 8.58002C0.26002 8.29002 0.26002 7.81002 0.55002 7.52002L7.07002 1.00002C8.13002 -0.0599829 9.86002 -0.0599829 10.93 1.00002L17.45 7.52002C17.74 7.81002 17.74 8.29002 17.45 8.58002C17.3 8.72002 17.11 8.80002 16.92 8.80002Z"
                className={`${
                  order.order !== undefined
                    ? "fill-surface-900"
                    : "fill-surface-500"
                }`}
              />
            </svg>
          </div>
        )}
      </div>
    </th>
  );
};

export default ThTable;
