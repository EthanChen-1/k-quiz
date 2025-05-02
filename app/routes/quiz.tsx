import { Outlet } from "react-router";
import type { Route } from "./+types/home";
import NavBar from "~/components/navbar/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "This quiz is all you need to find your next favorite group in KPOP | K-Quiz",
    },
    {
      name: "description",
      content:
        "Input your music preferences in the form below and we'll find groups that match your vibe",
    },
  ];
}

function Quiz() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col justify-center items-center">
        <Outlet />
      </main>
    </>
  );
}

export default Quiz;
