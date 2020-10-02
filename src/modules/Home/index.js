import React from "react";
import { Query } from "../../components/Query";

import { GET_HOME_PAGE } from "../../queries/homePage";

export const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Query query={GET_HOME_PAGE}>
            {({ data: { homePage } }) => {
              return <div>{homePage.Description}</div>;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};
