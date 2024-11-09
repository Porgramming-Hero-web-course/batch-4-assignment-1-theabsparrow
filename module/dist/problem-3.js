"use strict";
{
    function countWordOccurrences(sentence, word) {
        let output = 0;
        const absoluteSentence = sentence.toLowerCase();
        const absoluteWord = word.toLowerCase();
        const wordsInSentence = absoluteSentence.split(" ");
        for (const i of wordsInSentence) {
            if (i === absoluteWord) {
                output++;
            }
        }
        return output;
    }
    const sentence = 'I love typescript';
    const word = 'typescript';
    const result = countWordOccurrences(sentence, word);
    // console.log(result)
}
