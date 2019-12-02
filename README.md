# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @janicechan/lotide`

**Require it:**

`const _ = require('@janicechan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(arrayOfNum)`: with a given of array of numbers, finding the first number in the array
- `tail(arrayOfNum)`: with a given of array of numbers, returning the whole array of numbers except the first element
- `flatten(array)`: given an array with arrays of number inside, concat them into one array
- `middle(numOfArray)`: given an array of elements, return the middle element from the array
- `without(numList,removeItem)`: given two parameters, given a array of elements and return a new array with the removeItem removed
