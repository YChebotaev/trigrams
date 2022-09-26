trigrams
========

A data structure to store words by it's trigrams

Usage
-----

```tsx
import { Trigrams } from '@ychebotaev/trigrams'

const t = new Trigrams()

t.add('hello')
t.add('world')

t.has('hello') // => true
t.has('world') // => true

t.delete('world')

t.has('world') // => false

t.keys() // => ['hel', 'ell', 'llo']
t.values() // => ['hello']

t.find('ell') // => ['hello']
```

Contribution
============

Built with `vite` and `vitest`

### Run tests

```sh
npm test
```
