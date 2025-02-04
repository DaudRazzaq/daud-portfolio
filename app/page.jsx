import DownloadButton from "@/app/DownloadCV/DownloadButton"; // Import the Client Component
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Muhammad Daud Razzaq Khan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I build dynamic, responsive web and mobile applications using
              modern tools like React, Next.js, React Native, and Node.js.
              Passionate about solving complex problems and constantly learning
              new technologies to create seamless user experiences.
            </p>
            {/* Button and Social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadButton /> {/* Use the Client Component */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;