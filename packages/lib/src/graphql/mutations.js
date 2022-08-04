//import gql from 'graphql-tag';

  export const deleteDataModel = `mutation deleteDataModel($id: String!) {
    deleteDataModel(id: $id) 
  }
  `;

  export const createDataModel = `mutation createDataModel($input: DataModelInput!) {
    newDataModel(input: $input) {
      id
    }
  }
  `;


  export const updateDataModel = `mutation updateDataModel($input:DataModelInput!) {
    updateDataModel(input: $input) {
      id
      name
      description
      status
      modifiedAt
      createdAt
    }
  }`;
  
/*
module.exports = {
  deleteDataModel,
  createDataModel,
  updateDataModel
}
*/