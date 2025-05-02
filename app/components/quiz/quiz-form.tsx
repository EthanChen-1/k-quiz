import type { Route } from "./+types/project";
import { Form } from "react-router";

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  const genre = formData.get("genre");
  const gender = formData.get("gender");
  return { genre, gender };
}

function QuizForm({ actionData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-linear-to-tr from-sky-500 to-indigo-500 h-[500px] w-full pt-12 pb-16">
      <h2 className="text-3xl font-extralight text-center">
        Find a new group to listen to
      </h2>
      <Form className="flex flex-col gap-4 max-w-5xl mx-auto" method="post">
        <div className="flex gap-x-4 items-center">
          <label className="text-2xl" htmlFor="genre">
            Genre:
          </label>
          <select
            className="w-full text-center p-4 bg-white text-black"
            name="genre"
            id="genre"
          >
            <option className="text-black" value="ballad">
              Ballad
            </option>
            <option className="text-black" value="rhythum-&-blues">
              R&B
            </option>
            <option className="text-black" value="rock">
              Rock
            </option>
          </select>
        </div>
        <div className="flex gap-x-4 items-center">
          <label className="text-2xl" htmlFor="gender">
            Gender:
          </label>
          <select
            className="w-full text-center p-4 bg-white text-black"
            name="gender"
            id="gender"
          >
            <option className="text-black" value="boy">
              Boy
            </option>
            <option className="text-black" value="girl">
              Girl
            </option>
          </select>
        </div>
        <button className="border-2 border-white" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}

export default QuizForm;
