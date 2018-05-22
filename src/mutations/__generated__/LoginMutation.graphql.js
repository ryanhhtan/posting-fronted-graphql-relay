/**
 * @flow
 * @relayHash 0a24bc316ae08e02bcbf382ec9a012c3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginInput = {
  email: string,
  password: string,
};
export type LoginMutationVariables = {|
  user: LoginInput
|};
export type LoginMutationResponse = {|
  +login: ?{|
    +user: ?{|
      +id: string,
      +email: ?string,
      +name: ?{|
        +first: ?string,
        +last: ?string,
      |},
      +avatar: ?string,
    |},
    +token: ?string,
  |}
|};
*/


/*
mutation LoginMutation(
  $user: LoginInput!
) {
  login(user: $user) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "user",
    "type": "LoginInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "login",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "user",
        "variableName": "user",
        "type": "LoginInput!"
      }
    ],
    "concreteType": "Credential",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "name",
            "storageKey": null,
            "args": null,
            "concreteType": "Name",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "first",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "last",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "avatar",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "LoginMutation",
  "id": null,
  "text": "mutation LoginMutation(\n  $user: LoginInput!\n) {\n  login(user: $user) {\n    user {\n      id\n      email\n      name {\n        first\n        last\n      }\n      avatar\n    }\n    token\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LoginMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0716b54387377c64b7ea6be836357e9d';
module.exports = node;
