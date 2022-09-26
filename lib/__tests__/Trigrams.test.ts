import { describe, it, expect } from 'vitest'
import { Trigrams } from '../Trigrams'

describe('Trigrams', () => {
  describe('add()', () => {
    it('should add words by trigrams', () => {
      const t = new Trigrams()

      t.add('hello')

      expect(t.has('hello')).toBeTruthy()
    })
  })

  describe('has()', () => {
    it('should check is word exists', () => {
      const t = new Trigrams()

      t.add('hello')
      t.add('world')

      expect(t.has('world')).toBeTruthy()
      expect(t.has('hello')).toBeTruthy()
    })

    it('and also check if word not exits', () => {
      const t = new Trigrams()

      t.add('hello')

      expect(t.has('world')).toBeFalsy()
      expect(t.has('hello')).toBeTruthy()
    })
  })

  describe('delete()', () => {
    it('should delete word by trigrams', () => {
      const t = new Trigrams()

      t.add('hello')
      t.add('word')

      t.delete('world')

      expect(t.has('world')).toBeFalsy()
      expect(t.has('hello')).toBeTruthy()
    })
  })

  describe('keys()', () => {
    it('should return all keys of dict', () => {
      const t = new Trigrams()

      t.add('hello')
      t.add('wordl')

      expect(t.keys()).toStrictEqual(['hel', 'ell', 'llo', 'wor', 'ord', 'rdl'])
    })
  })

  describe('values()', () => {
    it('should return a list of all word', () => {
      const t = new Trigrams()

      t.add('hello')
      t.add('world')

      expect(t.values()).toStrictEqual([
        'hello',
        'world'
      ])
    })
  })

  describe('find()', () => {
    it('should return a list of words (single item) by trigram', () => {
      const t = new Trigrams()

      t.add('hello')
      t.add('world')

      expect(t.find('ell')).toStrictEqual(['hello'])
    })

    it('should return a list of words (multiple items) by trigram', () => {
      const t = new Trigrams()

      t.add('dash')
      t.add('bash')

      expect(t.find('ash')).toStrictEqual(['dash', 'bash'])
    })
  })
})
