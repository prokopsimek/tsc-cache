import { hash } from "./hash";
import { save, overwriteIfChanged } from "./save";

const run = async () => {
  let hashResult;
  try {
    hashResult = await hash();
    overwriteIfChanged(hashResult);
  } catch (error) {
    console.error(error);
  }
};

run();
