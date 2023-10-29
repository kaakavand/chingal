import React from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";
import RouteConfig from './../config/router.json'

const Index = () => {
  return (
    <Layout displayInput={false} onChangeSearch={() => true}>
      <div className="flex justify-center mt-4 ">
        <Link to={RouteConfig.users} className="text-surface-800 border-surface-300 border-2 px-6 py-4 rounded-lg hover:bg-surface-300 duration-200">
          لیست کاربران
        </Link>
      </div>
    </Layout>
  );
};

export default Index;
