import React from 'react';
import { useRouteError, isRouteErrorResponse } from "react-router-dom";


function showError(error: unknown): string {
  if(isRouteErrorResponse(error)) {
    return error.statusText;
  } else if (error instanceof Error) {
    return error.message;
  }
  return "";
}


function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{showError(error)}</i>
      </p>
    </div>
  );
}


export default ErrorPage;