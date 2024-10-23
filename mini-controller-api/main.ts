import app from "./app.ts";
import { PeopleController } from "./people-controller.ts";
import { PetController } from "./pets-controller.ts";

app({
  PetController,
  'people': PeopleController
})();
