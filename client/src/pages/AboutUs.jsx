import AboutHero from "../components/About/AboutHero";
import ArtistTeam from "../components/About/ArtistExperience";
import CoreValues from "../components/About/AboutValues";
import WhyChooseUs from "../components/About/AboutWhyUs";

const AboutUs = () => {
  return (
    <div className="mt-20 font-sans text-[#063b2b]">
      <AboutHero />
      <ArtistTeam />
      <CoreValues />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
