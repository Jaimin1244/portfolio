const Home = (props) => {
  return (
    <section {...props} id="home" className="text-center py-16 px-4 space-y-8">
      <img 
        src="/hero.png" 
        alt="Hero illustration" 
        className="mx-auto w-96 h-auto object-contain rounded-2xl shadow-md" 
      />
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
        Hey, I'm <span className="text-primary">Jaimin Patel</span>
      </h1>
      <p className="text-base sm:text-lg max-w-2xl mx-auto">
        I'm a web developer who loves crafting immersive web experiences. Check out some of my work below.
      </p>
      <a 
        href="#projects" 
        className="btn btn-primary inline-block px-6 py-3 font-medium rounded-lg shadow hover:shadow-lg transition duration-300"
      >
        See Projects
      </a>
    </section>
  );
};

export default Home;
