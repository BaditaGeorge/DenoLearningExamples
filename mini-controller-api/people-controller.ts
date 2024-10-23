import Controller from "./controller.ts";
import type JsonRequest from "./json-request.ts";
import { JsonResponse } from "./json-response.ts";

export class PeopleController extends Controller {
  post(req: JsonRequest): Response {
    return JsonResponse({ message: `PEOPLE echoing on ${req.method} for ${req.data?.message}` });
  }
  put(req: JsonRequest): Response {
    return JsonResponse({ message: `PEOPLE echoing on ${req.method} for ${req.data?.message}` });
  }
  get(req: JsonRequest): Response {
    return JsonResponse({ message: `PEOPLE echoing on ${req.method} for nothing!` });
  }
  patch(req: JsonRequest): Response {
    return JsonResponse({ message: `PEOPLE echoing on ${req.method} for ${req.data?.message}` });
  }
  delete(req: JsonRequest): Response {
    return JsonResponse({ message: `PEOPLE echoing on ${req.method}!` });
  }
    
}