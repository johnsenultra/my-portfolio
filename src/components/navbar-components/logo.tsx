import myLogo from "../../assets/johnsen2.png";

type LogoProps = {
  size?: number;
};

export default function Logo({ size = 44 }: LogoProps) {
  return (
    <div>
      <img src={myLogo} alt="Logo" width={size} height={size} />
    </div>
  );
}
