export type DataType = { [key: string]: string | number | string[] | number[] };

export default class JsonRequest {
    public data: DataType;
    public method: string;

    constructor(data: DataType, method: string) {
        this.data = data;
        this.method = method;
    }

    static async from(request: Request, extractBody?: boolean) {
        const data: { message: string } = extractBody ? await new Response(request.body).json() : {};
        return new JsonRequest(data, request.method);
    }
}