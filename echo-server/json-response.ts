export function JsonResponse(data: object, props?: object) {
    return new Response(JSON.stringify(data), {
        headers: { "content-type": "application/json; charset=utf-8" },
        ...props
    });
}
