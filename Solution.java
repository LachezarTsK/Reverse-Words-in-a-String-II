
public class Solution {

    private static final char EMPTY_SPACE = ' ';
    private static final int JUMP_OVER_ONE_EMPTY_SPACE = 2;

    public void reverseWords(char[] input) {
        reverseSubarray(input, 0, input.length - 1);
        reverseLettersInWords(input);
    }

    private void reverseSubarray(char[] input, int left, int right) {
        while (left < right) {
            swap(input, left, right);
            ++left;
            --right;
        }
    }

    private void reverseLettersInWords(char[] input) {
        int startOfWord = 0;
        for (int i = 0; i < input.length; ++i) {
            if (isEndOfWord(input, i)) {
                reverseSubarray(input, startOfWord, i);
                startOfWord = i + JUMP_OVER_ONE_EMPTY_SPACE;
            }
        }
    }

    private void swap(char[] input, int left, int right) {
        char temp = input[left];
        input[left] = input[right];
        input[right] = temp;
    }

    private boolean isEndOfWord(char[] input, int index) {
        return (index == input.length - 1 || input[index + 1] == EMPTY_SPACE) && input[index] != EMPTY_SPACE;
    }
}
