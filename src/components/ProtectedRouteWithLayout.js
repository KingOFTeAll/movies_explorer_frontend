import React from 'react';
import { Navigate } from "react-router-dom";
import Layout from './Layout/Layout';

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  return (
    props.loggedIn ?
      <Layout isLogged={props.loggedIn}>
        <Component {...props} />
      </Layout>

      : <Navigate to={"/"} replace />
  )
}

export default ProtectedRouteElement;
