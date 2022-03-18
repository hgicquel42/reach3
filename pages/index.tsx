import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="p-4 h-full">
      <div className="h-32" />
      <div className="w-full max-w-xl m-auto">
        <h1 className="text-8xl m-auto font-bold">Chad3.io</h1>
        <div className="my-2" />
        <div className="w-full">
          <input
            className="w-full bg-contrast rounded-xl p-4"
            placeholder="Rechercher un profil"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
