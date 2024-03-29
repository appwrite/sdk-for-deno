export class AppwriteException {
    message: string;
    code: number;
    response: any;
    type: string;

    constructor(message: string, code: number = 0, type: string = "", response: any = "") {
        this.message = message;
        this.code = code;
        this.type = type;
        this.response = response;
    }

    public toString(): string {
        return `${this.message} - ${this.code} - ${this.type} - ${JSON.stringify(this.response)}`;
    }
}
