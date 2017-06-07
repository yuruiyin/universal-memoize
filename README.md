# universal-memoize
A library of universal memoization for sync/async function. For async function, this library can just memoize the successful response of async request.

# Installation
```
npm install universal-memoize --save
```

# Usage
```javascript
import memoize from 'universal-memoize'

// sync
const addOne = memoize(x => x + 1)
addOne(5).then(res => console.log(res)) // 6

//async
const fetchData = memoize(asyncFunc) //asyncFunc is your async function as 'uri => fetch(uri)'
fetchData(yourArgs).then(res => console.log(res))

```


