import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment'; 

const mutation = graphql`
  mutation LoginMutation($user: LoginInput!) {
    login(user: $user){ 
      user {
        id
        email
        name {
          first
          last
        }
        avatar
      }
      token
    }
  }
`;

export default (variables, handleCompleted, handleError) => {
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: response => handleCompleted(response.login) ,
    onError: response =>  handleError(response) ,
  });
};

