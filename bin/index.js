#!/usr/bin/env node
const parseMakefile = require('@kba/makefile-parser')
const {ast} = parseMakefile(
`# Comment on VAR.
VAR = 23
# Comment on foo
foo: fizz\\ buzz bar
	step 1 $@
	step 2 $<`)
console.log(ast)