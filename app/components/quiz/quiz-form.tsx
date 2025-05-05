import type { Route } from "./+types/project";
import { Form } from "react-router";
import Artist from "../artist/artist";

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  const genre = formData.get("genre");
  const gender = formData.get("gender");
  try {
    const response = await fetch("http://localhost:5174/artist", {
      method: "POST",
      body: JSON.stringify({ genre, gender }),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (e) {
    console.error(e);
  }

  return { genre, gender };
}

function QuizForm({ actionData }: Route.ComponentProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 bg-linear-to-tr from-sky-500 to-indigo-500 h-[500px] w-full pt-12 pb-16">
        <h2 className="text-3xl font-extralight text-center">
          Find a new group to listen to
        </h2>
        <Form
          className="flex flex-col gap-4 max-w-xl w-full px-4"
          method="post"
        >
          <div className="grid grid-cols-4 gap-x-4 items-center col-span-2">
            <label
              className="text-2xl col-span-2 sm:col-span-1"
              htmlFor="genre"
            >
              Genre:
            </label>
            <select
              className="w-full text-center p-4 bg-white text-black col-span-2 sm:col-span-3"
              name="genre"
              id="genre"
            >
              <option className="text-black" value="ballad">
                Ballad
              </option>
              <option className="text-black" value="rhythm-&-blues">
                R&B
              </option>
              <option className="text-black" value="rock">
                Rock
              </option>
            </select>
          </div>
          <div className="grid grid-cols-4 gap-x-4 items-center col-span-2">
            <label
              className="text-2xl col-span-2 sm:col-span-1"
              htmlFor="gender"
            >
              Gender:
            </label>
            <select
              className="w-full text-center p-4 bg-white text-black col-span-2 sm:col-span-3"
              name="gender"
              id="gender"
            >
              <option className="text-black" value="boy">
                Boy
              </option>
              <option className="text-black" value="girl">
                Girl
              </option>
              <option className="text-black" value="mixed">
                Mixed
              </option>
            </select>
          </div>
          <button className="border-2 border-white" type="submit">
            Submit
          </button>
        </Form>
      </div>
      <div className="flex flex-col">
        {actionData ? <Artist artist={actionData.artist} /> : null}
      </div>
    </>
  );
}

export default QuizForm;
