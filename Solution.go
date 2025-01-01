
package main

import (
    "fmt"
    "reflect"
)

const EMPTY_SPACE = ' '
const JUMP_OVER_ONE_EMPTY_SPACE = 2

func reverseWords(input []byte) {
    reverseSubarray(input, 0, len(input) - 1)
    reverseLettersInWords(input)
}

func reverseSubarray(input []byte, left int, right int) {
    swap := reflect.Swapper(input)
    for left < right {
        swap(left, right)
        left++
        right--
    }
}

func reverseLettersInWords(input []byte) {
    startOfWord := 0
    for i := range input {
        if isEndOfWord(input, i) {
            reverseSubarray(input, startOfWord, i)
            startOfWord = i + JUMP_OVER_ONE_EMPTY_SPACE
        }
    }
}

func isEndOfWord(input []byte, index int) bool {
    return (index == len(input) - 1 || input[index+1] == EMPTY_SPACE) && input[index] != EMPTY_SPACE
}
