# Array Deduper
A method for deduplicating items in an array, returning a new Array.

Items are deduplicated in order, with the first occurrence of an item being the item returned in the results.

An optional key mapper can be provided to specify how to deduplicate the items. 
The `dedupe()` method can be added as an extension of the native JS `Array` interface. 

```js
const result1 = dedupe(
  ["1", "2", "1"]
) // returns ["1", "2"]

const result2 = ["1", "2", "1"].dedupe() // returns ["1", "2"]
```

## Installation

```shell
npm install --save array-deduper
```


## Documentation

### Extending `Array` with `dedupe()`

To add the `dedupe()` method to JS's base `Array` interface, you can import the extension by including:

```js
import "array-deduper/extend-array-with-dedupe"
```

into your codebase at some point before attempting to call `[].dedupe()`

```javascript
// somewhere in your initialization logic
import "array-deduper/extend-array-with-dedupe"

// ...

// Array now has a dedupe() method
const result = ["1", "2", "1"].dedupe() // returns ["1", "2"]
```

### Deduping Objects

The Array Deduper will deduplicate objects in an Array. 
By default, it converts the objects to strings using `JSON.stringify()` and then deduplicates those strings.

```javascript
const result = dedupe(
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
```

### Deduplicating objects based on an attribute

If the objects needed to be deduplicated based on some custom property, a `keyMapper` function can be passed to the function.

The `keyMapper` takes the input object and maps it to a string, that string is then used to deduplicate the objects.

A standard usecase for this is if the objects all have some kind of `id` property which is used to determine uniqueness amongst them.

```javascript
const result = dedupe(
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
