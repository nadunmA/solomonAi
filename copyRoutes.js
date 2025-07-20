import fs from "fs";
import path from "path";

const src = path.join(process.cwd(), "_routes.json");
const dest = path.join(process.cwd(), "dist", "_routes.json");

fs.copyFile(src, dest, (err) => {
  if (err) {
    console.error("Error copying _routes.json:", err);
  } else {
    console.log("_routes.json copied to dist/ folder successfully!");
  }
});
