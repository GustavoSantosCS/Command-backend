export class AppError extends Error {
  data: Record<string, any>
  constructor (message: string, data?: Record<string, any>, stack?: string) {
    super(message)
    this.message = message
    this.data = data
    this.stack = stack
  }
}
