import React from "react";

export default function ContentBox({ children }: React.PropsWithChildren) {
  return <div className="p-3 my-5 bg-white rounded-3xl">{children}</div>;
}
