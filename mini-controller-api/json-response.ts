export function JsonResponse(data: object, props?: ResponseInit) {
    return new Response(JSON.stringify(data), {
        headers: { "content-type": "application/json; charset=utf-8" },
        ...props
    });
}
