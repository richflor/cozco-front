import { Presentation } from "./small-component/Presentation";
import { Products } from "./small-component/Products";

export interface IAppProps {
}

export function Home (props: IAppProps) {
  return (
    <>
      <Presentation/>
      <Products /> 
    </>
  );
}