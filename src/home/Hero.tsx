export default function Hero() {
  return (
    <div className="relative h-full w-full bg-white">
      {/* Amber Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #f59e0b 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />
      {/* Your Content/Components */}
      <div className="relative z-10 flex min-h-56 border-5 border-dotted">
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          ipsa quisquam a quia voluptatibus officia dignissimos molestiae
          debitis nihil, amet natus. Minima harum ratione est inventore dolor
          voluptates deleniti aliquid.
        </p>
      </div>
    </div>
  );
}
