import myLogo from "../../assets/johnsen2.png";

type LogoProps = {
  width?: number;
  height?: number;
};

export default function Logo({ width = 70, height = 80 }: LogoProps) {
  return (
    <div>
      <img src={myLogo} alt="Logo" width={width} height={height} />
    </div>
  );
}
