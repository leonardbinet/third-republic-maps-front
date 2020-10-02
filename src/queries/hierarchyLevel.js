import gql from "graphql-tag";

export const HIERARCHY_LEVEL_QUERY_BY_ID = gql`
  {
    hierarchyLevel(id: $id) {
      id
      SectionDescription
      Level
      LevelLabel
    }
  }
`;

export const HIERARCHY_LEVELS_QUERY_BY_LEVEL = gql`
  query getHierarchyLevel($level: String) {
    hierarchyLevels(where: { Level: $level }) {
      SectionDescription
      Level
      LevelLabel
    }
  }
`;

export const HIERARCHY_LEVELS_QUERY = gql`
  query {
    hierarchyLevels {
      id
      SectionDescription
      Level
      LevelLabel
    }
  }
`;
