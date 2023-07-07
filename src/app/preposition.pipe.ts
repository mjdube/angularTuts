import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preposition',
})
export class PrepositionPipe implements PipeTransform {
  prepositions: string[] = [
    'of',
    'the',
    'on',
    'in',
    'over',
    'above',
    'below',
    'at',
    'by',
    'for',
    'from',
    'to',
    'with',
  ];

  transform(value: any): any {
    if (!value) {
      return null;
    }

    const words: string[] = value.split(' ');

    const transformedWords: string[] = words.map((word, index) => {
      if (index === 0 || !this.prepositions.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    });

    return transformedWords.join(' ');
  }
}
