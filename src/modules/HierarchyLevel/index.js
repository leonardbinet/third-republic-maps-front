import React from "react";
import { useParams } from "react-router";
import { Query } from "../../components/Query";
import ReactMarkdown from "react-markdown";

import { HIERARCHY_LEVELS_QUERY_BY_LEVEL } from "../../queries/hierarchyLevel";

const HierarchyLevel = () => {
  let { level } = useParams();
  return (
    <Query query={HIERARCHY_LEVELS_QUERY_BY_LEVEL} variables={{ level }}>
      {({ data: { hierarchyLevels } }) => {
        if (!hierarchyLevels.length) {
          return <div>Wrong</div>;
        }
        const hierarchyLevel = hierarchyLevels[0];
        return (
          <>
            <div>
              <h1>{hierarchyLevel.LevelLabel}</h1>
            </div>
            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <ReactMarkdown source={hierarchyLevel.SectionDescription} />
              </div>
            </div>
          </>
        );
      }}
    </Query>
  );
};

export { HierarchyLevel };
