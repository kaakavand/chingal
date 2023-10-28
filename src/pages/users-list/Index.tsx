import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../core/Layout";
import TableHeader from "./components/TableHeader";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getAge } from "../../functions/getAge";
import { ClockLoader } from "react-spinners";
import Breadcrumb from "../../core/Breadcrumb";

interface userType {
  dateOfBirth: string;
  name: string;
  phoneNumber: string;
  email: string;
  street: string;
  company: string;
  id: number;
  age: number;
}

const Index = () => {
  const [valueSearch, setValueSearch] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["users", valueSearch],
    queryFn: () =>
      axios.get(
        `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users?search=${valueSearch}`
      ),
  });
  const navigate = useNavigate();

  return (
    <Layout onChangeSearch={(value: string) => setValueSearch(value)}>
      <Breadcrumb
        list={[
          { label: "کاربران", route: "" },
        ]}
      />

      <div className="relative">
        <table className="w-full bg-surface-300 border rounded-xl overflow-hidden border-surface-300 text-sm text-right text-surface-900">
          <TableHeader />
          <tbody>
            {data?.data.map((el: userType) => (
              <tr
                className="odd:bg-surface-200 even:bg-surface-100 cursor-pointer hover:opacity-80 transition duration-200"
                onClick={() => navigate("/users/" + el.id)}
              >
                <td className="p-6 text-center border border-surface-300">
                  {el.name}
                </td>
                <td className="p-6 text-center border border-surface-300">
                  {el.age}
                </td>
                <td className="p-6 text-center border border-surface-300">
                  {el.phoneNumber}
                </td>
                <td className="p-6 text-center border border-surface-300">
                  {el.email}
                </td>
                <td className="p-6 text-center border border-surface-300">
                  {el.street}
                </td>
                <td className="p-6 text-center border border-surface-300">
                  {el.company}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Index;
