import { Link } from "react-router";
import type { Route } from "./+types/home";
import NavBar from "~/components/navbar/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Find New KPOP groups that match the kind of music you like to listen to | K-Quiz",
    },
    {
      name: "description",
      content:
        "Whether you are an avid fan of KPOP or a new listener you'll be able to find groups that sync to your musical tastes and find a new groups to listen too.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section className="flex flex-col justify-center items-center pt-12 gap-y-4  h-[500px] bg-linear-to-bl from-violet-500 to-fuchsia-500">
          <h2 className="text-3xl font-bold">Welcome to K-Quiz</h2>
          <p className="font-extralight text-center text-2xl">
            There are a ton of talented KPOP groups in the world waiting to be
            discovered
          </p>
          <Link
            className="py-4 px-8 bg-white text-black rounded font-black"
            to="/quiz"
          >
            Get Started
          </Link>
        </section>
        <section className="flex flex-col justify-center items-center pt-12 pb-16 gap-y-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Recommended Groups
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
            <div className="rounded p-4 border-white border-2 flex flex-col gap-2">
              <h3 className="text-2xl font-bold">TWICE</h3>
              <p className="font-extralight">
                Twice is one of the most popular KPOP groups in the world.
              </p>
              <p className="text-xl ">Members</p>
              <ul className="list-disc list-inside">
                <li className="font-extralight">Nayeon</li>
                <li className="font-extralight">Jeongyeon</li>
                <li className="font-extralight">Momo</li>
                <li className="font-extralight">Sana</li>
                <li className="font-extralight">Jihyo</li>
                <li className="font-extralight">Mina</li>
                <li className="font-extralight">Dahyun</li>
                <li className="font-extralight">Chaeyoung</li>
                <li className="font-extralight">Tzuyu</li>
              </ul>
            </div>
            <div className="rounded p-4 border-white border-2 flex flex-col gap-2">
              <h3 className="text-2xl font-bold">BLACKPINK</h3>
              <p className="font-extralight">
                Black Pink is one of the most popular KPOP groups in the world.
              </p>
              <p className="text-xl ">Members</p>
              <ul className="list-disc list-inside">
                <li className="font-extralight">Jisoo</li>
                <li className="font-extralight">Rose</li>
                <li className="font-extralight">Jennie</li>
                <li className="font-extralight">Lisa</li>
              </ul>
            </div>
            <div className="rounded p-4 border-white border-2 flex flex-col gap-2">
              <h3 className="text-2xl font-bold">BTS</h3>
              <p className="font-extralight">
                BTS is one of the most popular KPOP groups in the world.
              </p>
              <p className="text-xl ">Members</p>
              <ul className="list-disc list-inside">
                <li className="font-extralight">RM</li>
                <li className="font-extralight">Jin</li>
                <li className="font-extralight">Suga</li>
                <li className="font-extralight">J-Hope</li>
                <li className="font-extralight">Jimin</li>
                <li className="font-extralight">V</li>
                <li className="font-extralight">Jungkook</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
