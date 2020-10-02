import React from "react";
import { Query } from "../Query";
import { Link } from "react-router-dom";

import { HIERARCHY_LEVELS_QUERY } from "../../queries/hierarchyLevel";

const Nav = () => {
  return (
    <div>
      <Query query={HIERARCHY_LEVELS_QUERY}>
        {({ data: { hierarchyLevels } }) => {
          return (
            <div>
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                  <h2>Third Republic Maps</h2>
                </div>
                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {hierarchyLevels.map((hierarchy, i) => {
                      return (
                        <li key={hierarchy.id}>
                          <Link
                            to={`/hierarchy/${hierarchy.Level}`}
                            className="uk-link-reset"
                          >
                            {hierarchy.LevelLabel}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export { Nav };
