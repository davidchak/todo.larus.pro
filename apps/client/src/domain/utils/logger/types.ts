export interface ILoggerMessage {
  text: string,
  module: string
}

export interface ILoggerService {
  warn: (msg: ILoggerMessage) => void
  error: (msg: ILoggerMessage) => void
  info: (msg: ILoggerMessage) => void
}
