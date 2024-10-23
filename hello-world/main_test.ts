import { assertEquals } from "@std/assert";
import { sayHello } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(sayHello('Paul'), 'Hello Paul!');
});
