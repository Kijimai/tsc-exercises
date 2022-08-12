function generateError(message: string, code: number): never {
  throw { message, errorCode: code }
}

generateError("An Error Occured!", 500)
