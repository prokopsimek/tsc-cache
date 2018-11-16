import { hashElement } from "folder-hash";
import { IHashResult } from "./IHashResult";


const options = {
  folders: {
    exclude: [".*", "node_modules", "test_coverage"],
    include: ["./src"]
  }
  // files: { include: ["src"] }
};

export const hash = async (): Promise<IHashResult> => {
  console.log("Creating a hash over the current folder:");
  const hash = await hashElement("./src", options);
  return hash.toString();
};
