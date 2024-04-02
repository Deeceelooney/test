import React from "react";

const sizes = {
  xs: "text-[10px] font-medium",
  lg: "text-base font-normal",
  s: "text-[11px] font-medium",
  "2xl": "text-xl font-normal",
  xl: "text-lg font-normal",
  md: "text-sm font-medium",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600 font-publicsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
