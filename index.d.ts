export type OmitStrict<T, K extends keyof T> = Omit<T, K>

export type PartialProp<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P]
}

export type RequiredProp<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: T[P]
}

export type Override<T, U> = Omit<T, keyof T & keyof U> & U

export type ValueOf<T> = T[keyof T]
