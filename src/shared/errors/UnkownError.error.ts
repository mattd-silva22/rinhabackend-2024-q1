export class UnknownError {
  public name: string;
  public message: string;
  constructor(message: string) {
    this.name = "UnknownError";
    this.message = message;
  }
}
