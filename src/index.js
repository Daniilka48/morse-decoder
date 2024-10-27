const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = ''

    for (let i = 0; i < expr.length; i = i + 10) {
        const length10Char = expr.substring(i, i + 10);

        result += (length10Char === '**********') ? ' ' : decodeMorse(length10Char);
    }
    return result;
}
    

function decodeMorse(length10Char) {    
    const morseSignals = length10Char.split(/(10|11|)/).map((number) => {
        if (number === '10') return '.';
        if (number === '11') return '-';
    }).join('');
    
    return MORSE_TABLE[morseSignals];
}

module.exports = {
    decode
}