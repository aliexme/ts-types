export type OmitStrict<T, K extends keyof T> = Omit<T, K>

export type PartialProp<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P]
}
