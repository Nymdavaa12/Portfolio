import { AboutButton } from "./icons/AboutButton";
import { SecondProfile } from "./icons/SecondProfile";
export const About = () => {
  return (
    <div className="p-4 mt-16 ">
      <AboutButton />
      <SecondProfile />
      <h1 className="text-gray-900 text-2xl font-semibold mt-12 ">
        Curious about me? Here you have it:
      </h1>
      <p className="mt-6 text-gray-600 text-base font-normal">
        I'm a designer turned full stack developer, passionate about React.js
        and Node.js. I excel in blending technical and visual aspects to craft
        exceptional digital products, prioritizing user experience, precise
        design, and optimized code.
      </p>
      <p className="mt-4 text-gray-600 text-base font-normal">
        Since starting my web development journey in 2015, I've embraced
        challenges and kept up with the latest tech trends. Now in my early
        thirties, seven years in, I'm building cutting-edge web apps using
        Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
      </p>
      <p className="mt-4 text-gray-600 text-base font-normal">
        With a progressive mindset, I enjoy the entire product development
        process, from ideation to execution. Off duty, you'll find me on
        Twitter, tracking startup journeys, or unwinding. Follow me for tech
        insights and public project updates on Twitter or GitHub.
      </p>
      <p className="mt-4 text-gray-600 text-base font-normal">
        Finally, some quick bits about me.
      </p>
      <p>
        <ul>
          <li>B.E. in Computer Engineering</li>
          <li>Full time freelancer</li>
          <li>Avid learner</li>
        </ul>
      </p>
      <p className="mt-4 text-gray-600 text-base font-normal">
        One last thing, I'm available for freelance work, so feel free to reach
        out and say hello! I promise I don't bite 😉
      </p>
    </div>
  );
};
