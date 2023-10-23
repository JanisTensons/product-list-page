"use client";
import React from "react";
import { CustomButtonProps } from "../../../types";

const CustomButton = ({
  title,
  containerStyles,
  onClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"submit"}
      className={`${containerStyles}`}
      onClick={onClick}
    >
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
