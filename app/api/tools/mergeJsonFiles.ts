import fs from "fs";
import path from "path";

export default function mergeJsonFiles(directoryPath: string) {
  try {
    const files = fs.readdirSync(directoryPath);
    const jsonData: unknown[] = [];

    files.forEach((file) => {
      if (path.extname(file) === ".json") {
        const filePath = path.join(directoryPath, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        try {
          const parsedData = JSON.parse(fileContent);
          if (Array.isArray(parsedData)) {
            jsonData.push(...parsedData); // Merge if it's an array
          } else if (typeof parsedData === "object" && parsedData !== null) {
            jsonData.push(parsedData); // if it is an object, push it.
          } else {
            console.warn(
              `Warning: ${file} does not contain an object or array. Skipping.`
            );
          }
        } catch (parseError) {
          console.error(`Error parsing JSON in ${file}:`, parseError);
        }
      }
    });

    return jsonData;
  } catch (error) {
    console.error("Error reading directory:", error);
    return null;
  }
}
