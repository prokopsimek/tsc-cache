import * as fs from "fs";
import { IHashResult } from "./IHashResult";
import { exec } from "child_process";

const tscCacheFileName: string = ".tscCache";

export const save = content => {
  fs.writeFileSync(tscCacheFileName, content);
};

export const overwriteIfChanged = (hashResult: IHashResult): void => {
  let existingHashResult = read();

  if (!existingHashResult || existingHashResult.hash != hashResult.hash) {
    save(hashResult);

    const compiler = "tsc";
    exec(compiler, function(error, stdout, stderr) {
      // do your staff with stdout here
    });
  }
};

export const read = (): IHashResult => {
  try {
    const result = fs.readFileSync(tscCacheFileName, "utf8");
    return JSON.parse(result);
  } catch (error) {
    return null;
  }
};
