import Controller from "./controller.ts";
import type JsonRequest from "./json-request.ts";
import { JsonResponse } from "./json-response.ts";

export class PetController extends Controller {
  post(req: JsonRequest): Response {
    return JsonResponse({ message: `PET echoing on ${req.method} for ${req.data?.message}` });
  }
  put(req: JsonRequest): Response {
    return JsonResponse({ message: `PET echoing on ${req.method} for ${req.data?.message}` });
  }
  get(req: JsonRequest): Response {
    return JsonResponse({ message: `PET echoing on ${req.method} for nothing!` });
  }
  patch(req: JsonRequest): Response {
    return JsonResponse({ message: `PET echoing on ${req.method} for ${req.data?.message}` });
  }
  delete(req: JsonRequest): Response {
    return JsonResponse({ message: `PET echoing on ${req.method}!` });
  }
    
}