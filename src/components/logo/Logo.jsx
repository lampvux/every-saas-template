import Image from 'next/image';
import logoImage from "./logo.svg";
export const Logo = () => {
  return (
    <Image
      priority
      src={logoImage}
      alt="Site Logo"
    />
  )
}
