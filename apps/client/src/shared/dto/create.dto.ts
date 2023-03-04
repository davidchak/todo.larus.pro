export type CreateDTO<T> = {
  [K in keyof T]: T[K]
}
