"use strict";

(function (global) {
	const empty = null;

	function link (item, key, a, b) {
		item[a] = key;

		if (item[b] === key) {
			item[b] = empty;
		}
	}

	function reset () {
		this.cache = {};
		this.first = empty;
		this.last = empty;
		this.length = 0;

		return this;
	}
