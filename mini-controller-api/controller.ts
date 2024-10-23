import JsonRequest from "./json-request.ts";
import { JsonResponse } from "./json-response.ts";
import { HttpMethod } from "./models.ts";

export default abstract class Controller {
    abstract post(req: JsonRequest): Response;
    abstract put(req: JsonRequest): Response;
    abstract get(req: JsonRequest): Response;
    abstract patch(req: JsonRequest): Response;
    abstract delete(req: JsonRequest): Response;

    async handle(request: Request) {
        switch (request.method) {
            case HttpMethod.GET:
                return this.get(await JsonRequest.from(request));
            case HttpMethod.POST:
                return this.post(await JsonRequest.from(request, true));
            case HttpMethod.PATCH:
                return this.patch(await JsonRequest.from(request, true));
            case HttpMethod.DELETE:
                return this.patch(await JsonRequest.from(request, true));
            case HttpMethod.PUT:
                return this.patch(await JsonRequest.from(request, true));
            default:
                return JsonResponse({}, { status: 405 });
        }
    }
}
