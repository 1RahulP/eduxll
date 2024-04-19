import Image from "next/image";

interface SideMenuCardboxProp {
  logoimage?: any;
  logoname?: string;
  titlename?: string;
}

const SideMenuCardbox = ({
  logoimage,
  logoname,
  titlename,
}: SideMenuCardboxProp) => {
  return (
    <>
      <div className="hover:bg-slate-50 flex items-center gap-[5px] border border-[#000] rounded-[5px] border-t border-slate-100 dark:border-slate-400/10 p-[10px]">
        <div className="logo">
          <Image
            src={logoimage}
            width={40}
            height={40}
            alt=""
            objectFit="contain"
            className="logocur rounded-[5px]"
          />
        </div>
        <div className="contentbox flex-1">
          <h4 className="text-[15px] font-[500] text-[#000] p-0 m-0">
            {logoname}
          </h4>
          <p className="text-[15px] font-[300] text-[#6e6d6d] p-0 m-0">
            {titlename}
          </p>
        </div>
      </div>
    </>
  );
};
export default SideMenuCardbox;
