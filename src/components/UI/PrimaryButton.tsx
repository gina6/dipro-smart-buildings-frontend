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
      } text-white px-6 py-2 rounded-lg ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
}
