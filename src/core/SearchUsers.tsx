import React, { useEffect, useState, useCallback } from "react";
import { useDebouncedCallback } from "use-debounce";

const searchIcon = require("./../assets/images/search-icon.png") as string;

const SearchUsers = ({ onChange }: {onChange : Function}) => {
  const [value, setValue] = useState("");
  const debounced = useDebouncedCallback((value) => {
    onChange(value);
    localStorage.setItem("valueSearch", value);
  }, 500);

  useEffect(() => {
    const localStorageValue = localStorage.getItem('valueSearch')
    if(localStorageValue){
      onChange(localStorageValue)
      setValue(localStorageValue)
    }
  }, []);

  return (
    <form
      className="border-surface-300 p-1 border rounded-xl flex items-center py-1 px-2 formBgGradient xl:w-72"
      action=""
    >
      <img className="w-5 h-5" src={searchIcon} alt="seacrh" />
      <input
        onChange={({ target }) => {setValue(target.value);debounced(target.value)}}
        className="bg-transparent outline-none placeholder-surface-500 w-full text-surface-500 px-2"
        placeholder="جستجو"
        value={value}
        type="text"
      />
    </form>
  );
};

export default SearchUsers;
