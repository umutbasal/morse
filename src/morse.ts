type Char = string;
type Code = string;
type MorseMap = Record<Char, Code>;
type MorseMapReverse = Record<Code, Char>;

const codes: MorseMap = {
	a: '.-',
	b: '-...',
	c: '-.-.',
	d: '-..',
	e: '.',
	f: '..-.',
	g: '--..',
	h: '....',
	i: '..',
	j: '.---',
	k: '-.-',
	l: '.-..',
	m: '--',
	n: '-.',
	o: '---',
	p: '.--.',
	q: '--.-',
	r: '.-.',
	s: '...',
	t: '-',
	u: '..-',
	v: '...-',
	w: '.--',
	x: '-..-',
	y: '-.--',
	z: '--..'
};

const reverseCodes: MorseMapReverse = Object.entries(codes).reduce((acc, [char, code]) => {
	acc[code] = char;
	return acc;
}, {} as MorseMapReverse);

export function charToCode(char: Char): Code {
	return codes[char];
}

export function codeToChar(code: Code): Char {
	return reverseCodes[code];
}

export function textToCodes(text: string): Code[] {
	return text.split('').map(charToCode);
}

export function codesToText(codes: Code[]): string {
	return codes.map(codeToChar).join('');
}