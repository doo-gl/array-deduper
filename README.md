# array-deduper
A method for deduplicating items in an array, returning a new Array.

Items are deduplicated in order, with the first occurrence of an item being the item returned in the results.

An optional key mapper can be provided to specify how to deduplicate the items. 
The `dedupe()` method can be added as an extension of the native JS `Array` interface. 

```js
const result1 = dedupe(
  ["1", "2", "1"]
) // returns ["1", "2"]

const result2 = ["1", "2", "1"].dedupe() // returns ["1", "2"]

const result3 = dedupe(
  [
    {id: "1", a: "1"},
    {id: "2", a: "1"},
    {id: "1", a: "2"},
    {id: "1", a: "1"}
  ]
)
// returns [
// {id: "1", a: "1"}, 
// {id: "2", a: "1"},
// {id: "1", a: "2"}
// ]

const result4 = dedupe(
  [ 
    {id: "1", a: "1"}, 
    {id: "2", a: "1"}, 
    {id: "1", a: "2"},
    {id: "1", a: "1"} 
  ], 
  item => item.id
) 
// returns [
// {id: "1", a: "1"}, 
// {id: "2", a: "1"}
// ]


```

## Installation

```shell
npm install --save array-deduper
```

To add the `dedupe()` method to JS's base `Array` interface, you can import the extension by including:

```js
import "array-deduper/extend-array-with-dedupe"
```

into your codebase at some point before attempting to call `[].dedupe()`


