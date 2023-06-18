const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Henry",
    "Isabella",
    "Jack",
    "Mohammed",
    "Fatima",
    "Ahmed",
    "Aisha",
    "Yusuf",
    "Zara",
    "Ali",
    "Sofia",
    "Amir",
    "Layla",
];

export function getRandomName() {
    return names[Math.floor(Math.random() * names.length)];
}

const words = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
];

export function generateRandomSentence() {
    const sentenceLength = Math.floor(Math.random() * 4) + 3; // Length of 4 words
    const sentence = [];

    for (let i = 0; i < sentenceLength; i++) {
        const word = words[Math.floor(Math.random() * words.length)];
        sentence.push(word);
    }

    return sentence.join(" ");
}
