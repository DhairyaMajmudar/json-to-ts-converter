import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import JsonToTS from "json-to-ts";

function App() {
  const defaultSchema = {
    people: [{ name: "Tom" }, { name: "Marcus" }, { name: "Dhairya" }],
    favoriteNumber: 7,
    favoriteWord: "Octue/Strand",
  };

  const [inputSchema, setInputSchema] = useState(defaultSchema);
  const [outputType, setOutputType] = useState("");

  const handleConvert = () => {
    const json =
      typeof inputSchema === "string" ? JSON.parse(inputSchema) : inputSchema;

    const tsInterfaces = JsonToTS(json)
      .map((typeInterface) => typeInterface)
      .join("\n\n");
    setOutputType(tsInterfaces);
  };

  return (
    <>
      <div className="m-4 p-7">
        <h1 className="font-semibold text-2xl">JSON to Typescript Converter</h1>

        <div className="flex flex-row ">
          <div className="mt-5 w-1/2">
            <Editor
              height="50vh"
              className="border border-gray-300 rounded-md mb-5"
              defaultLanguage="json"
              value={JSON.stringify(inputSchema, null, 2)}
              options={{ scrollbar: { vertical: "auto" } }}
              onChange={(value) =>
                setInputSchema(value ? JSON.parse(value) : defaultSchema)
              }
            />
          </div>
          <div className="mt-5 w-1/2">
            <Editor
              height="50vh"
              className="border border-gray-300 rounded-md mb-5"
              defaultLanguage="typescript"
              value={outputType}
              options={{ readOnly: true, scrollbar: { vertical: "hidden" } }}
            />
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <button
            className="bg-black font-semibold text-white px-3 py-1.5 rounded-md hover:bg-black/80"
            onClick={handleConvert}
          >
            Convert to TS
          </button>
          <button className="bg-black font-semibold text-white px-3 py-1.5 rounded-md hover:bg-black/80">
            Publish to NPM
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
