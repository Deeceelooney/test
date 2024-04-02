import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[1px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-indigo-300",
    indigo_500: "bg-indigo-500 text-white-A700",
    blue_gray_50: "bg-blue_gray-50 text-indigo-500",
  },
};
const sizes = {
  md: "h-[44px] px-2.5",
  sm: "h-[44px] px-[18px] text-base",
  xl: "h-[48px] px-6 text-base",
  lg: "h-[48px] px-3.5",
  xs: "h-[20px] px-0.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "blue_gray_50",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "sm", "xl", "lg", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "indigo_500", "blue_gray_50"]),
};

export { Button };
