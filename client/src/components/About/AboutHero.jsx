const AboutHero = () => {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">
      
      <img 
        src="https://images.pexels.com/photos/542556/pexels-photo-542556.jpeg"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-semibold text-white drop-shadow-lg">
          About Noor Mehendi Artistry
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white opacity-90">
          Blending traditional elegance with modern creativity — we bring your 
          special moments to life with premium, professional mehendi services.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
