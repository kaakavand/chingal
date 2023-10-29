import React, { useState , useEffect } from "react";
import ThTable from "../../../core/ThTable";

const TableHeader = ({changeSort} : any) => {
  const [sortValue, setSortValue] = useState<{key : string, order : boolean | undefined}>({key : '' , order : undefined});

  useEffect(() => {
    changeSort(sortValue)
  }, [sortValue])
  
  
  return (
    <thead className="text-xs text-surface-500 uppercase  bg-surface-100">
      <tr>
        <ThTable
          onChange={(value: any) => setSortValue(value)}
          id="name"
          title={"نام کاریر"}
          value={sortValue}
        />
        <ThTable
          onChange={(value: any) => setSortValue(value)}
          id="age"
          title={"سن"}
          value={sortValue}
        />
        <ThTable
          onChange={(value: any) => setSortValue(value)}
          id="phoneNumber"
          title={"شماره همراه"}
          value={sortValue}
        />
        <ThTable
          onChange={(value: any) => setSortValue(value)}
          id="email"
          title={"ایمیل"}
          value={sortValue}
        />
        <ThTable
          onChange={(value: any) => setSortValue(value)}
          id="street"
          title={"آدرس"}
          value={sortValue}
        />
        <ThTable
          onChange={(value: any) => setSortValue(value)}
          id="company"
          title={"شرکت"}
          value={sortValue}
        />
      </tr>
    </thead>
  );
};

export default TableHeader;
