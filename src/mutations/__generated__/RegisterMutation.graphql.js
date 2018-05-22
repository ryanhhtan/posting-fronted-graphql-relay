/**
 * @flow
 * @relayHash a3d63fc337ff44afa507f80c7388d4c9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserInput = {
  name?: ?NameInput,
  email?: ?string,
  avatar?: ?string,
  password?: ?string,
};
export type NameInput = {
  first?: ?string,
  last?: ?string,
};
export type RegisterMutationVariables = {|
  user: UserInput
|};
export type RegisterMutationResponse = {|
  +register: ?{|
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
mutation RegisterMutation(
  $user: UserInput!
) {
  register(user: $user) {
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
    "type": "UserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "register",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "user",
        "variableName": "user",
        "type": "UserInput!"
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
  "name": "RegisterMutation",
  "id": null,
  "text": "mutation RegisterMutation(\n  $user: UserInput!\n) {\n  register(user: $user) {\n    user {\n      id\n      email\n      name {\n        first\n        last\n      }\n      avatar\n    }\n    token\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RegisterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "RegisterMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '71ebe70f286cf2e7830521ea751d65d3';
module.exports = node;
