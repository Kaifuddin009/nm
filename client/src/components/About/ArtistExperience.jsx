const ArtistExperience = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Meet Our Artists
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Our team consists of talented, trained, and passionate mehendi artists  
          specializing in bridal, Arabic, Indo-Western, and custom designs.
        </p>

        <div className="flex justify-center">
          {[1].map((num) => (
            <div
              key={num}
              className="rounded-xl overflow-hidden shadow-md bg-white"
            >
              <img
                src={`https://images.unsplash.com/photo-1672268930923-07278055b1bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                className="w-full md:h-84 object-fill"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Senior Artist</h3>
                <p className="text-gray-500 text-sm">
                  7+ years of experience in premium bridal mehendi.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ArtistExperience;
