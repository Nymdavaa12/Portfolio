import { Header } from "../components/Header";
import { Skills } from "../components/Skills";
import { Para } from "@/components/Para";
import { About } from "@/components/About";
const Page = () => {
  return (
    <div className="container max-w-screen-xl mx-auto ">
      <div className="top_cont flex items-center justify-between">
        <Header />
        <Skills />
      </div>

      <div>
        <Para />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default Page;
