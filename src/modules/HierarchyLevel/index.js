import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { Redirect } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";
import Jumbotron from "react-bootstrap/Jumbotron";

import { APP_BACKEND_URL } from "../../utils/backEnd";

export const HierarchyLevel = () => {
  let { level } = useParams();

  const [loaded, setIsLoaded] = useState();
  const [isLoading, setIsLoading] = useState();
  const [pageContent, setPageContent] = useState();

  useEffect(() => {
    const searchUrl = new URL(`${APP_BACKEND_URL}/hierarchy-levels/`);
    searchUrl.searchParams.append("Level", level);
    setIsLoading(true);
    fetch(searchUrl.href)
      .then((response) => response.json())
      .then((results) => {
        if (results) {
          // a "equal" search on level can only lead to at most one page
          setPageContent(results[0]);
        }
      })
      .catch((error) => <Redirect to="/not-found" />)
      .finally(() => {
        setIsLoading(false);
        setIsLoaded(true);
      });
  }, [level]);

  return (
    <Jumbotron>
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      {loaded && (
        <ReactMarkdown>{pageContent.SectionDescription}</ReactMarkdown>
      )}
    </Jumbotron>
  );
};
