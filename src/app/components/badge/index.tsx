import { Children } from "react";

interface BadgechipProp {

  children?: any;
  textname?: String;
  className?:String
}
const Badgechip = ({
  
  children,
  className,
  ...rest
}: BadgechipProp) => {
  return (
    <>
      <div className={`rounded-[5px] w-fit h-[25px] px-4 rounded-md leading-none flex items-center ${className}`}>
        {children}
      </div>
    </>
  );
};
export default Badgechip;
