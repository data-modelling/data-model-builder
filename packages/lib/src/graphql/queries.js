//import gql from 'graphql-tag';

export const getCountryCode = `query getCountryCode {
  getCountryCode
}
`;


export const getDataModel = `query getDataModel($id: String!) {
  getDataModel(id: $id) {
    id
    name
    description
    status
    modifiedAt
    createdAt
  }
}
`;

export const listDataModels = `query listDataModels($filter: TableDataModelFilterInput,$sortDirection:String,$limit:Int,$nextToken:String) {
  listDataModels(filter: $filter,sortDirection:$sortDirection,limit:$limit,nextToken:$nextToken) {
    items {
    id
    name
    description
    status
    modifiedAt
    createdAt
    }
    nextToken
  }
}
`;


/*
module.exports = {
  getDataModel,
  getCountryCode,
  listDataModels
}
*/