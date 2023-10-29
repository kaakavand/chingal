import React from "react";
import Form from "./components/Form";
import Layout from "../../core/Layout";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../../core/Breadcrumb";
import RouteConfig from './../../config/router.json'

const Index = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["users", id],
    queryFn: () =>
      axios.get(`${RouteConfig.baseUrl}users/${id}`),
  });

  return (
    <Layout displayInput={false} onChangeSearch={() => true}>
      <Breadcrumb list={[{label : 'کاربران' , route :'/users'} , {label :'ویرایش کاربر' , route : ''}]}/>
      <Form data={data} />
    </Layout>
  );
};

export default Index;
