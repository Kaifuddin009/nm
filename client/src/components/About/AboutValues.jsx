import { FaPalette, FaHandsWash, FaStar, FaLeaf } from "react-icons/fa";

const AboutValues = () => {
  const values = [
    { icon: <FaStar />, title: "Professionalism", text: "Premium quality, punctual, client-first experience." },
    { icon: <FaHandsWash />, title: "Hygiene & Safety", text: "Fresh cones, hygienic tools, clean process." },
    { icon: <FaPalette />, title: "Creativity", text: "Unique designs customized to your personality." },
    { icon: <FaLeaf />, title: "Experience", text: "Skilled artists trained in bridal, Arabic & modern styles." },
  ];

  return (
    <section className="py-20 bg-[#f7fdfa]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Core Values
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-6 rounded-xl text-center hover:shadow-xl transition"
            >
              <div className="text-green-700 text-4xl mb-3 flex justify-center">
                {v.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
