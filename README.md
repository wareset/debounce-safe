# debounce-safe

Safe debounce.

## Usage:

debounce(func: `function`, [wait: `number` = 0, [isLeading: `boolean` = false, [maxWait: `number` = -1]]])

#### Base:

```js
import debounce from 'debounce-safe'
// or const debounce = require('debounce-safe').default

debounce(func, 21)
debounce(func, 21, false)
// like lodash.debounce(func, 21, { leading: false, trailing: true })

debounce(func, 12, true)
// like lodash.debounce(func, 12, { leading: true, trailing: false })
```

#### Methods:

`clear`, `flush` and `cause`

```js
import debounce from 'debounce-safe'

const func = (a, b) => {
  return a + b
}

const debouncedFunc = debounce(func, 2000)

// standard call. "func" is called after 2 seconds
debouncedFunc(1, 2) // => void

// Reset as if the "debouncedFunc" had never been called.
debouncedFunc.clear() // => void

// Execute the "func" synchronously,
// but if it was to be executed after a while.
// It works as a 'TIME ACCELERATION' - the next call
// will be possible only after 2 seconds
debouncedFunc.flush() // => void

// Synchronously calls a "func" with arguments.
// This also works as a 'TIME ACCELERATION'
debouncedFunc.cause(2, 3) // => 5
```

## License

[MIT](LICENSE)
