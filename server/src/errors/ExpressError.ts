export default class ExpressError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.name = 'ExpressError';
        this.status = status;
    }
}
