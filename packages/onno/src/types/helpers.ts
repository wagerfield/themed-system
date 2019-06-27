// prettier-ignore
// A | B | C > A & B & C
// https://stackoverflow.com/questions/50374908
export type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends
    ((k: infer I) => void) ? I : never
