export class Trigrams {
  #index: Record<string, Set<string>> = {}

  getTrigrams (word: string): string[] {
    return Array.from(word)
      .slice(0, -2)
      .map((_, i) => word.slice(i, i + 3))
  }

  has (word: string): boolean {
    const trigrams = this.getTrigrams(word)

    for (const trigram of trigrams) {
      const wordSet = this.#index[trigram]

      if (wordSet?.has(word)) return true
    }

    return false
  }

  add (word: string): this {
    const trigrams = this.getTrigrams(word)

    for (const trigram of trigrams) {
      if (trigram in this.#index) {
        this.#index[trigram].add(word)
      } else {
        this.#index[trigram] = new Set([word])
      }
    }

    return this
  }

  delete (word: string): this {
    const trigrams = this.getTrigrams(word)

    for (const trigram of trigrams) {
      if (trigram in this.#index) {
        this.#index[trigram].delete(word)

        if (this.#index[trigram].size === 0) {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete this.#index[trigram]
        }
      }
    }

    return this
  }

  keys (): string[] {
    return Object.keys(this.#index)
  }

  values (): string[] {
    return Array.from(
      new Set(
        Array.from(Object.values(this.#index))
          .map((words) => Array.from(words.values()))
          .flat()
      )
    )
  }
}
