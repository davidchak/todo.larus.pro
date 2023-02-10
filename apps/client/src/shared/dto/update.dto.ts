export type UpdateDTO<T> = {
  [K in keyof T]?: T[K]
}
