{
    function countWordOccurrences(sentence: string, word: string): number {

        let output: number = 0;

        const absoluteSentence: string = sentence.toLowerCase();
        const absoluteWord: string = word.toLowerCase();

        const wordsInSentence: string[] = absoluteSentence.split(" ");

        for (const i of wordsInSentence) {
            if (i === absoluteWord) {
                output++
            }
        }

        return output;
    }

    const sentence: string = 'I love typescript';
    const word: string = 'typescript';

    const result: number = countWordOccurrences(sentence, word)
    console.log(result)
}