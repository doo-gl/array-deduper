
export const DEFAULT_DEDUPLICATION_KEY_MAPPER = <T>(i:T):string => {
  return JSON.stringify(i)
}

export const dedupe = <T> (items:Array<T>, keyMapper:(i:T) => string = DEFAULT_DEDUPLICATION_KEY_MAPPER):Array<T> => {
  const results = new Array<T>()
  const keySet = new Set<string>()
  items.forEach(item => {
    const key = keyMapper(item)
    const isDuplicate = keySet.has(key)
    if (!isDuplicate) {
      results.push(item)
      keySet.add(key)
    }
  })
  return results
}
