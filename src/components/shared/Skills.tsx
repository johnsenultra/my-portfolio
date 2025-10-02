export default function Skills() {
  return (
    <section className="grow">
      <div className="relative min-h-screen w-full bg-black">
        {/* Dual Gradient Overlay Swapped Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            radial-gradient(circle 500px at 20% 20%, rgba(139,92,246,0.3), transparent),
            radial-gradient(circle 500px at 80% 80%, rgba(59,130,246,0.3), transparent)
      `,
            backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
          }}
        />
        {/* Your Content/Components */}
        <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-4 px-5 py-20 text-center text-white">
          <div>
            <span>About Me</span>
          </div>
          <p>
            I'm a passionate developer with a knack for creating dynamic and
            responsive web applications.
          </p>
        </div>
      </div>
    </section>
  );
}
