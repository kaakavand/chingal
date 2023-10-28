import React from "react";

const ValidationInput = ({ register, id, label , errors}: any) => {
  
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className={` ${errors[id] ? 'text-red ': 'text-surface-500'}`}>
        {label}
      </label>
      <input
        {...register(id, { required: true })}
        className={`bg-surface-100 w-full border ${errors[id] ? 'border-red ': 'border-surface-300 '} p-2 outline-none text-surface-900 rounded-xl`}
        id={id}
      />
    </div>
  );
};

export default ValidationInput;
