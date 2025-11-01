import * as fs from "node:fs";
import * as fsPromises from "node:fs/promises";

fsPromises
  .mkdir("A")
  .then(() => fsPromises.mkdir("B"))
  .then(() => fsPromises.mkdir("C"));