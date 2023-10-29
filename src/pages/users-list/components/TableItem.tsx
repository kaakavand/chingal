import React from "react";
import { useNavigate } from "react-router-dom";

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

export const TableItem = ({ obj }: { obj: userType }) => {
  const navigate = useNavigate();

  return (
    <tr
      className="odd:bg-surface-200 even:bg-surface-100 cursor-pointer hover:opacity-80 transition duration-200"
      onClick={() => navigate("/users/" + obj.id)}
    >
      <td className="p-6 text-center border border-surface-300">{obj.name}</td>
      <td className="p-6 text-center border border-surface-300">{obj.age}</td>
      <td className="p-6 text-center border border-surface-300">
        {obj.phoneNumber}
      </td>
      <td className="p-6 text-center border border-surface-300">{obj.email}</td>
      <td className="p-6 text-center border border-surface-300">
        {obj.street}
      </td>
      <td className="p-6 text-center border border-surface-300">
        {obj.company}
      </td>
    </tr>
  );
};
