import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import { Components } from "@repo/ui/Component";
import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
   <div>
      <Button appName="hello world" >
        hello world  
      </Button>
      <Components />
   </div>
  );
}
