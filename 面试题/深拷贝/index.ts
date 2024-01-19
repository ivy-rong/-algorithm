function deepCopy<T>(source: T): T {
  if (source === null || typeof source !== 'object') {
    return source
  }

  const isArray = Array.isArray(source)
  const clone: any = isArray ? [] : {}

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      clone[key] = deepCopy(source[key])
    }
  }

  //  return JSON.parse(JSON.stringify(source));

  return clone
}
