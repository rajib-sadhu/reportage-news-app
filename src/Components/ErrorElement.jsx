import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {

    const error = useRouteError();

  return (
    <>
        <h1> Error Page </h1> 

        <h1> {error.status} </h1>
        <h2> {error.error.message} </h2>
        <h3> {error.statusText} </h3>
    </>
  )
}

export default ErrorElement
