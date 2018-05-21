# humanizr [![Build Status](https://travis-ci.org/16kilobyte/humanizr.svg?branch=master)](https://travis-ci.org/16kilobyte/humanizr)

Make `strings` humanly readable

## Install

```
$ npm install humanizr
```


## Usage

```js
const humanizr = require('humanizr');

humanizr.humanify('fooBar', humanizr);
//=> 'Foo Bar'

humanizr.humanify('foo-bar', humanizr.LOWER_CASE);
//=> 'foo bar'

humanizr.humanify('foo_bar', humanizr.UPPER_CASE);
//=> 'FOO BAR'

humanizr.humanify('fooBar', humanizr.TITLE_CASE);
//=> 'Foo Bar'

humanizr.humanify('fooBar', humanizr.SENTENCE_CASE);
//=> 'Foo bar'

```

## License

MIT © [Kator James](https://github.com/16kilobyte)
