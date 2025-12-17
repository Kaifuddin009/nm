import ContactForm from "../components/contact/ContactForm";
import ContactInfoCard from "../components/contact/ContactInfoCard";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full bg-[#f7f7f7] py-16 px-5 md:px-10 lg:px-20"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="playfair-display-unique text-4xl md:text-5xl font-bold text-[#00301a]">
          Get in Touch
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          We'd love to be a part of your special day.  
          Share your details — our team will get back to you with the perfect Mehendi plan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ContactForm />
        <ContactInfoCard />
      </div>
    </section>
  );
};

export default ContactSection;
