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
      <div className="relative h-[150px] w-full lg:hidden">
        <div className="flex h-1/3 w-full items-start justify-end px-5 pt-3 [&_*]:z-20">
          <Logo className="h-8 w-8"></Logo>
        </div>
        <div className="flex h-2/3 w-full flex-col items-center justify-center [&_*]:z-20">
          <div className="mx-14 flex flex-col items-center justify-center text-center text-green">
            <p>{headerSubtitle}</p>
            <h1 className="leading-snug">{headerTitle}</h1>
          </div>
        </div>
        <HeaderBG className="absolute top-0 z-10 h-[120%] w-full" />
      </div>

      {/* Desktop Header */}
      <div className="h-auto">
        <div className="hidden h-16 w-full bg-plantGreen lg:block">
          <div className="flex h-full items-center justify-end px-5 text-center text-green">
            <Logo className="h-8 w-8 origin-center transition-transform hover:scale-125" />
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
