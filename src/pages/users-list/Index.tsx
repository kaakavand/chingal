import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../core/Layout";
import TableHeader from "./components/TableHeader";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getAge } from "../../functions/getAge";
import { ClockLoader } from "react-spinners";
import Breadcrumb from "../../core/Breadcrumb";
import { TableItem } from "./components/TableItem";
import RouteConfig from './../../config/router.json'

interface userType {
  dateOfBirth: string;
  name: string;
  phoneNumber: string;
  email: string;
  street: string;
  company: string;
  country: string;
  city: string;
  id: number;
  age: number;
}

interface SortState {
  key: string;
  order: boolean | undefined;
}

const Index = () => {
  const [valueSearch, setValueSearch] = useState("");
  const [sortValue, setSortValue] = useState<SortState>({
    key: "",
    order: undefined,
  });
  const { data, isLoading } = useQuery({
    queryKey: ["users", valueSearch, sortValue],
    queryFn: () =>
      axios.get(
        `${RouteConfig.baseUrl}users?search=${valueSearch}${
          sortValue.order !== undefined
            ? "&sortBy=" +
              sortValue.key +
              "&order=" +
              (sortValue.order === true ? "asc" : "desc")
            : ""
        }`
      ),
  });

  return (
    <Layout onChangeSearch={(value: string) => setValueSearch(value)}>
      <Breadcrumb list={[{ label: "کاربران", route: "" }]} />
      <div className="relative overflow-x-auto">
        <table className="w-full bg-surface-300 border rounded-xl overflow-hidden border-surface-300 text-sm text-right text-surface-900">
          <TableHeader changeSort={(value: SortState) => setSortValue(value)} />
          <tbody>
            {data?.data.map((el: userType) => (
              <TableItem obj={el} />
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Index;
