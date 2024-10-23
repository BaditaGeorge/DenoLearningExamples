import type Controller from "./controller.ts";

export default (controllersMap: { [key: string]: { new(): any; } }) => {
    const controllerInstanceMap: { [key: string]: Controller } = Object.entries(controllersMap).reduce((acc, [key, value]) => ({ ...acc, [key]: new value() as Controller }), {});
    return () => {
        Deno.serve(async (req) => {
            for (const key in controllerInstanceMap) {
                if (req.url.toLowerCase().includes(key.toLowerCase())) {
                    return await controllerInstanceMap[key].handle(req);
                }
            }

            return new Response();
        });
    };
};
