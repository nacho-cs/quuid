# quuid

![quuid definition](./Screenshot%202023-03-25%20at%2010-10-35%20quid%20-%20Google%20Search.png)
(or Quick Unique Url IDs)

## A tiny library for generating secure ids

### You can generate:

- rfc4122 v1-compliant UUIDs
- rfc4122 v4-compliant UUIDs
- Cryptographically secure, url-safe, ids of any byte length
- Short rfc4122 v4-compliant UUIds

## Installation:

Run:

```console
$ npm i quuid
```

For ES6:

```js
import uuid from "quuid";
```

## Usage:

Just use the constructor `uuid` and add whatever id you want after

```js
import uuid from "quuid";

console.log(new uuid().v1()); // returns v1 uuids

console.log(new uuid().v4()); // returns v4 uuids

console.log(new uuid().id(8)); // returns an 8 byte id in base 36

console.log(new uuid().short()); // returns short v4 uuids
```
