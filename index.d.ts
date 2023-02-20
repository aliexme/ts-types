/**
 * Same as Omit, but K must be extended from keys of type T
 */
export type OmitStrict<T, K extends keyof T> = Omit<T, K>

/**
 * Make specific properties in T optional
 */
export type PartialProp<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P]
}

/**
 * Make specific properties in T required
 */
export type RequiredProp<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: T[P]
}

/**
 * Combine types T and U and overwrite properties from type T with properties from type U
 */
export type Override<T, U> = Omit<T, keyof T & keyof U> & U

/**
 * Extract values from T
 */
export type ValueOf<T> = T[keyof T]
