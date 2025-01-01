
function reverseWords(input: string[]): void {
    this.EMPTY_SPACE = ' ';
    this.JUMP_OVER_ONE_EMPTY_SPACE = 2;

    reverseSubarray(input, 0, input.length - 1);
    reverseLettersInWords(input);
};

function reverseSubarray(input: string[], left: number, right: number): void {
    while (left < right) {
        swap(input, left, right);
        ++left;
        --right;
    }
}

function reverseLettersInWords(input: string[]): void {
    let startOfWord = 0;
    for (let i = 0; i < input.length; ++i) {
        if (isEndOfWord(input, i)) {
            reverseSubarray(input, startOfWord, i);
            startOfWord = i + this.JUMP_OVER_ONE_EMPTY_SPACE;
        }
    }
}

function swap(input: string[], left: number, right: number): void {
    [input[right], input[left]] = [input[left], input[right]];
}

function isEndOfWord(input: string[], index: number): boolean {
    return (index === input.length - 1 || input[index + 1] === this.EMPTY_SPACE) && input[index] !== this.EMPTY_SPACE;
}
