import React, { useEffect, useState } from "react";

import { APP_BACKEND_URL } from "../../utils/backEnd";
import Spinner from "react-bootstrap/Spinner";

import Jumbotron from "react-bootstrap/Jumbotron";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [homePageContent, setHomePageContent] = useState();
  const [fetchError, setFetchError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${APP_BACKEND_URL}/home-page`)
      .then((response) => response.json())
      .then((homePage) => {
        setHomePageContent(homePage);
      })
      .catch((error) => {
        setFetchError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Jumbotron>
      {fetchError}
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      {homePageContent && homePageContent.Description}
    </Jumbotron>
  );
};
