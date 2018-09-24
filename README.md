# imagemin-ect

> Efficient-Compression-Tool <b>[imagemin](https://github.com/imagemin/imagemin)</b> plugin<br/>
> [Efficient-Compression-Tool by fhanau](https://github.com/fhanau/Efficient-Compression-Tool)

## Install

```
$ npm install -save imagemin-ect
```

## Usage

```js
const imagemin = require('imagemin');
const imageminEct = require('imagemin-ect');

imagemin(['images/*.png'], 'build/images', {use: [imageminEct()]}).then(() => {
	console.log('Images optimized');
});
```

## API

### imageminEct([options])(buffer)

Returns a promise for a buffer.

#### buffer

Type: `Buffer`

Buffer to optimize.

#### options

Type: `Object`

##### optimizationLevel

Type: `number`
Default: `3`

Select an optimization level between `1` and `9`.

> The optimization level determines how much optimization is done; higher levels take longer, but may have better results.

##### strip

Type: `boolean`
Default: `true`

> Discard metadata

##### allfiltersCheap

Type: `boolean`
Default: `false`

> Try several png filter strategies. Cheaper than regular allfilters, but still improves compression

##### mtDeflate

Type: `boolean`
Default: `false`

> Use several threads to compress png files<br/>
> May decrease compression ratio

## License

MIT © [imagemin](https://github.com/imagemin)<br/>
Apache License 2.0 © [Efficient-Compression-Tool](https://github.com/fhanau/Efficient-Compression-Tool)
