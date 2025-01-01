
using System;

public class Solution
{
    private static readonly char EMPTY_SPACE = ' ';
    private static readonly int JUMP_OVER_ONE_EMPTY_SPACE = 2;

    public void ReverseWords(char[] input)
    {
        ReverseSubarray(input, 0, input.Length - 1);
        ReverseLettersInWords(input);
    }

    private void ReverseSubarray(char[] input, int left, int right)
    {
        while (left < right)
        {
            Swap(input, left, right);
            ++left;
            --right;
        }
    }

    private void ReverseLettersInWords(char[] input)
    {
        int startOfWord = 0;
        for (int i = 0; i < input.Length; ++i)
        {
            if (IsEndOfWord(input, i))
            {
                ReverseSubarray(input, startOfWord, i);
                startOfWord = i + JUMP_OVER_ONE_EMPTY_SPACE;
            }
        }
    }

    private void Swap(char[] input, int left, int right)
    {
        char temp = input[left];
        input[left] = input[right];
        input[right] = temp;
    }

    private bool IsEndOfWord(char[] input, int index)
    {
        return (index == input.Length - 1 || input[index + 1] == EMPTY_SPACE) && input[index] != EMPTY_SPACE;
    }
}
