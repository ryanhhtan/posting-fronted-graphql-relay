import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';
import 'dotenv/config';
import { getToken } from './authentication';

const graphqlEndpoint = process.env.REACT_APP_GRAPHQL_URI; 
// console.log(graphqlEndpoint);

const headers = () => {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...token && { 'Authorization': token },
  };
};

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch(graphqlEndpoint, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  }).then(json => {
    // console.log(operation);
    // if (operation.operationKind === 'mutation' && json.errors) {
    if (json.errors) {
      return Promise.reject(json.errors); 
    }
    return Promise.resolve(json); 
  });
}); 

const environment = new Environment({
  network,
  store,
});

export default environment;
