
#include <span>
#include <vector>
#include <utility>
using namespace std;

class Solution {

    static const char EMPTY_SPACE = ' ';
    static const int JUMP_OVER_ONE_EMPTY_SPACE = 2;

public:
    void reverseWords(vector<char>& input) const {
        reverseSubarray(input, 0, input.size() - 1);
        reverseLettersInWords(input);
    }

private:
    void reverseSubarray(span<char> input, size_t left, size_t right) const {
        while (left < right) {
            swap(input[left], input[right]);
            ++left;
            --right;
        }
    }

    void reverseLettersInWords(span<char> input) const {
        size_t startOfWord = 0;
        for (size_t i = 0; i < input.size(); ++i) {
            if (isEndOfWord(input, i)) {
                reverseSubarray(input, startOfWord, i);
                startOfWord = i + JUMP_OVER_ONE_EMPTY_SPACE;
            }
        }
    }

    bool isEndOfWord(span<const char> input, size_t index) const {
        return (index == input.size() - 1 || input[index + 1] == EMPTY_SPACE) && input[index] != EMPTY_SPACE;
    }
};
