/*! konami-js v1.0.1 | http://mck.me/mit-license */
var Konami={};(function(d,e){var f=d.sequence=function(){var b=Array.prototype.slice.call(arguments),c=0;return function(a){a=a||e.event;a=a.keyCode||a.which||a;if(a===b[c]||a===b[c=0])a=b[++c],"function"===typeof a&&(a(),c=0)}};d.code=function(b){return f(38,38,40,40,37,39,37,39,66,65,b)}})(Konami,window);$(document).on('keyup',Konami.code(function(){alert('Nice try!');}));
