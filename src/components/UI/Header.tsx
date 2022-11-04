import { ReactComponent as HeaderBG } from "../../assets/BG-Secondary-Green.svg";
import { ReactComponent as Logo } from "../../icons/Logo.svg";

interface HeaderProps {
  headerTitle?: string | JSX.Element;
  headerSubtitle?: string;
}

export default function Header({ headerTitle, headerSubtitle }: HeaderProps) {
  return (
    <>
      {/* Mobile and Tablet Header */}
      <div className="relative w-full h-[150px] lg:hidden">
        <div className="w-full h-1/3 [&_*]:z-20 flex items-start justify-end px-5 pt-3">
          <Logo className="w-8 h-8"></Logo>
        </div>
        <div className="w-full h-2/3 [&_*]:z-20 flex flex-col items-center justify-center">
          <div className="flex flex-col mx-14 items-center justify-center text-green text-center">
            <p>{headerSubtitle}</p>
            <h1 className="leading-snug">{headerTitle}</h1>
          </div>
        </div>
        <HeaderBG className="absolute top-0 z-10 w-full h-[120%]" />
      </div>

      {/* Desktop Header */}
      <div className="h-auto">
        <div className="w-full h-16 bg-plantGreen hidden lg:block">
          <div className="flex h-full px-5 items-center justify-end text-green text-center">
            <Logo className="w-8 h-8 origin-center hover:scale-125 transition-transform" />
          </div>
        </div>
        {/*  <div className="max-w-3xl m-auto pt-24 text-green">
            <p>{headerSubtitle}</p>
            <h1 className="text-3xl">{headerTitle}</h1>
          </div> */}
      </div>
    </>
  );
}
