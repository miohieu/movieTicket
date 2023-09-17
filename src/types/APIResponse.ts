export type APIResponse<T> ={
    statusCode: number,
    message: string,
    content: T
}
