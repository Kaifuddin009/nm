import { FaCheckCircle } from "react-icons/fa";
import ychooseus from '../../assets/ychooseus.png'
const AboutWhyUs = () => {
  const points = [
    "100% natural, chemical-free mehendi",
    "Premium quality & deep stain guarantee",
    "Specialized in bridal, Arabic, Indo-Western & kids mehendi",
    "Home service available for all major locations",
    "Experienced artists with 6+ years of expertise",
    "Customized designs to match your theme & outfit",
  ];

  return (
    <section className="py-20 bg-white flex">
      <div className="p-10 mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Choose Us?
        </h2>

        <ul className="space-y-4">
          {points.map((p, i) => (
            <li key={i} className="flex items-center text-lg">
              <FaCheckCircle className="text-green-700 mr-3" />
              {p}
            </li>
          ))}
        </ul>

      </div>
      <img src={ychooseus} className="w-220 h-100" alt="Why Choose Us"  />
    </section>
  );
};

export default AboutWhyUs;
