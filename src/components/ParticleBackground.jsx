import Particles from "react-tsparticles";

function ParticleBackground() {
  return (
    <Particles
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "#020617",
          },
        },

        particles: {
          number: {
            value: 50,
          },

          color: {
            value: "#3b82f6",
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: 3,
          },
        },
      }}
    />
  );
}

export default ParticleBackground;
