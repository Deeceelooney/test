import React from "react";

const sizes = {
  "2xl": "text-[52px] font-semibold md:text-[44px] sm:text-[38px]",
  xl: "text-[40px] font-semibold md:text-[38px] sm:text-4xl",
  s: "text-sm font-semibold",
  md: "text-base font-semibold",
  xs: "text-[13px] font-semibold",
  lg: "text-2xl font-semibold md:text-[22px]",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-indigo-500 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
