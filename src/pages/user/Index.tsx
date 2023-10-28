import React from "react";
import Form from "./components/Form";
import Layout from "../../core/Layout";
import { useQuery } from "@tanstack/react-query";
import {useParams} from 'react-router-dom'
import axios from "axios";

const Index = () => {
  const {id} = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ["users" , id],
    queryFn: () =>
      axios.get(
        `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${id}`
      ),
  });

  

  return (
    <Layout displayInput={false} onChangeSearch={() => true}>
      <Form data={data}/>
    </Layout>
  );
};

export default Index;
