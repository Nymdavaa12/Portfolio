import { Profile } from "./icons/Profile";
import { Locationicon } from "./icons/Location";
import { ActiveStatus } from "./icons/Active";
import { CatIcon } from "./icons/CatIcon";
import { BirdIcon } from "./icons/BirdIcon";
import { BubbleIcon } from "./icons/Bubble";

export const Para = () => {
  return (
    <div className="p-4 m-auto ">
      <div className="mt-16">
        <Profile />
      </div>
      <div>
        <h1 className="Title text-4xl text-gray-900 font-semibold mt-12 ">
          Hi, I am Tom 👋
        </h1>
        <p className="paragraph text-base text-gray-600 font-normal mt-2 ">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.{" "}
        </p>
      </div>
      <div className="mt-12">
        <div className=" flex gap-2 ">
          <Locationicon />
          <p className="text-gray-600 text-base font-normal ">
            Ulaanbaatar, Mongolia
          </p>
        </div>
        <div className="flex gap-2 ">
          <ActiveStatus />
          <p className="text-gray-600 text-base font-normal">
            Available for new projects
          </p>
        </div>
        <div className="flex mt-12 ">
          <CatIcon />
          <BirdIcon />
          <BubbleIcon />
        </div>
      </div>
    </div>
  );
};
