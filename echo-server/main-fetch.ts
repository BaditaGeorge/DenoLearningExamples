import { JsonResponse } from "./json-response.ts";

export default {
    fetch(request) {
        const userAgent = request.headers.get("user-agent") || "Unknown";
        return JsonResponse({ message: `Hello to ${userAgent}!` });
    },
} satisfies Deno.ServeDefaultExport;
