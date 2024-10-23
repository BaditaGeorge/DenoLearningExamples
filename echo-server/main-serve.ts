import { JsonResponse } from "./json-response.ts";
import { HttpMethod } from "./model.ts";

Deno.serve(async (_req) => {
    if (_req.method === HttpMethod.GET) {
        return JsonResponse({ message: "Hello World from GET!" });
    } else if (_req.method === HttpMethod.POST) {
        const data: { message: string } = await new Response(_req.body).json();
        return JsonResponse({ message: `Echoing back message ${data.message}!` });
    }
    
    return JsonResponse({ message: `You made a request with ${_req.method} method!` });
});
