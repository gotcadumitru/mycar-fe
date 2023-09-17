export const arrayUnion = <T>(arr1: T[], arr2: T[], equalityFunc: (v1: T, v2: T) => boolean) => {
  const union = arr1.concat(arr2)

  for (let i = 0; i < union.length; i++) {
    for (let j = i + 1; j < union.length; j++) {
      if (equalityFunc(union[i], union[j])) {
        union.splice(j, 1)
        j--
      }
    }
  }
  return union
}
