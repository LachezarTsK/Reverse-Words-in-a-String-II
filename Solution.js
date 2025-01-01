
/**
 * @param {string[]} input
 * @return {void}
 */
var reverseWords = function (input) {
    this.EMPTY_SPACE = ' ';
    this.JUMP_OVER_ONE_EMPTY_SPACE = 2;

    reverseSubarray(input, 0, input.length - 1);
    reverseLettersInWords(input);
};

/**
 * @param {string[]} input
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
function reverseSubarray(input, left, right) {
    while (left < right) {
        swap(input, left, right);
        ++left;
        --right;
    }
}

/**
 * @param {string[]} input
 * @return {void}
 */
function reverseLettersInWords(input) {
    let startOfWord = 0;
    for (let i = 0; i < input.length; ++i) {
        if (isEndOfWord(input, i)) {
            reverseSubarray(input, startOfWord, i);
            startOfWord = i + this.JUMP_OVER_ONE_EMPTY_SPACE;
        }
    }
}

/**
 * @param {string[]} input
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
function swap(input, left, right) {
    [input[right], input[left]] = [input[left], input[right]];
}

/**
 * @param {string[]} input
 * @param {number} index
 * @return {boolean}
 */
function isEndOfWord(input, index) {
    return (index === input.length - 1 || input[index + 1] === this.EMPTY_SPACE) && input[index] !== this.EMPTY_SPACE;
}
