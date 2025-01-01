
class Solution {

    private companion object {
        const val EMPTY_SPACE = ' '
        const val JUMP_OVER_ONE_EMPTY_SPACE = 2
    }

    fun reverseWords(input: CharArray): Unit {
        reverseSubarray(input, 0, input.size - 1)
        reverseLettersInWords(input)
    }

    private fun reverseSubarray(input: CharArray, left: Int, right: Int) {
        var left = left
        var right = right

        while (left < right) {
            swap(input, left, right)
            ++left
            --right
        }
    }

    private fun reverseLettersInWords(input: CharArray): Unit {
        var startOfWord = 0
        for (i in input.indices) {
            if (isEndOfWord(input, i)) {
                reverseSubarray(input, startOfWord, i)
                startOfWord = i + JUMP_OVER_ONE_EMPTY_SPACE
            }
        }
    }

    private fun swap(input: CharArray, left: Int, right: Int): Unit {
        val temp = input[left]
        input[left] = input[right]
        input[right] = temp
    }

    private fun isEndOfWord(input: CharArray, index: Int): Boolean {
        return (index == input.size - 1 || input[index + 1] == EMPTY_SPACE) && input[index] != EMPTY_SPACE
    }
}
