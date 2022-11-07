import React from "react";

export default function PrimaryButton({
  children,
  ...props
}: React.PropsWithChildren<React.ComponentProps<"button">>) {
  return (
    <button
      {...props}
      className={`${
        props.disabled ? "bg-darkGrey" : "bg-green"
      } rounded-lg px-6 py-2 text-white ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
}
