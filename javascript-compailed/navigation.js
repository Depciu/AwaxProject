'use strict';

// remove jump 

if (history.pushState) {
	history.pushState(null, null, '#hero');
} else {
	location.hash = '#hero';
}