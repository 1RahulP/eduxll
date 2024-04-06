import { Children } from "react";

interface BadgechipProp {
  textcolor?: string;
  bgcolor?: string;
  children?: any;
  textname?: string;
}
const Badgechip = ({
  textcolor,
  bgcolor,
  children,
  ...rest
}: BadgechipProp) => {
  return (
    <>
      <div className={`text-[${textcolor}] bg-[${bgcolor}] rounded-[5px] `}>
        {children}
      </div>
    </>
  );
};
export default Badgechip;
