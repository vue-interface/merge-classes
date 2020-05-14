# MergeClasses

A mixing that adds the mergeClasses() method to the Vue instance. Can pass an
object or a string in the arguments, and the will all be merged together in a
JSON object that can be passed to a `class` attribute in a Vue component.

``` js
mergeClasses(...classes)
```

### Example

``` js
mergeClasses('a', {
    b: 2
}, 'c');

// Returns
{
    'a': true,
    'b': 2,
    'c': true
}
```