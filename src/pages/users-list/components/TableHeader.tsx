import React, { useState, useEffect } from "react";
import ThTable from "../../../core/ThTable";

const TableHeader = ({ changeSort }: any) => {
  const [sortValue, setSortValue] = useState<{
    key: string;
    order: boolean | undefined;
  }>({ key: "", order: undefined });

  useEffect(() => {
    const localStorageValue = localStorage.getItem("sortValue");
    if (localStorageValue) {
      setSortValue(JSON.parse(localStorageValue));
      changeSort(JSON.parse(localStorageValue));
    }
  }, []);

  const handleChange = (value: any) => {
    setSortValue(value);
    localStorage.setItem("sortValue", JSON.stringify(value));
    changeSort(value);
  };

  return (
    <thead className="text-xs text-surface-500 uppercase  bg-surface-100">
      <tr>
        <ThTable
          onChange={handleChange}
          id="name"
          title={"نام کاریر"}
          value={sortValue}
        />
        <ThTable
          onChange={handleChange}
          id="age"
          title={"سن"}
          value={sortValue}
        />
        <ThTable
          onChange={handleChange}
          id="phoneNumber"
          title={"شماره همراه"}
          value={sortValue}
        />
        <ThTable
          onChange={handleChange}
          id="email"
          title={"ایمیل"}
          value={sortValue}
        />
        <ThTable
          onChange={handleChange}
          id="street"
          title={"آدرس"}
          value={sortValue}
        />
        <ThTable
          onChange={handleChange}
          id="company"
          title={"شرکت"}
          value={sortValue}
        />
      </tr>
    </thead>
  );
};

export default TableHeader;
