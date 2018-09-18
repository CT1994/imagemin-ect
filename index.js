'use strict';
const ectBin = require('ect-bin');
const execBuffer = require('exec-buffer');
const tempy = require("tempy");

module.exports = ({
	optimizationLevel = 3,
	strip = true,
	allfiltersCheap = false,
	mtDeflate = false
} = {}) => buffer => {
	if (!Buffer.isBuffer(buffer)) {
		return Promise.reject(new TypeError('Expected a buffer'));
	}

	if (optimizationLevel < 1 || optimizationLevel > 9) {
		return Promise.reject(new TypeError('optimization level must be 1 to 9'));
	}

	const tempFilePath = tempy.file({extension: 'png'});

	const args = [
		`-${optimizationLevel}`,
	];

	if (strip === true) {
		args.push('-strip')
	}

	if (allfiltersCheap === true) {
		args.push('--allfilters-c')
	}

	if (mtDeflate === true) {
		args.push('--mt-deflate')
	}

	args.push(tempFilePath);

	return execBuffer({
		input: buffer,
		bin: ectBin,
		args,
		inputPath: tempFilePath,
		outputPath: tempFilePath,
	}).catch(err => {
		err.message = err.stderr || err.message;
		throw err;
	});
};
