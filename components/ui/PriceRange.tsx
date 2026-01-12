"use client";

import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#3b82f6",
  height: 3,
  padding: "13px 0",

  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",

    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    },
  },

  "& .MuiSlider-track": {
    height: 3,
  },

  "& .MuiSlider-rail": {
    height: 3,
    opacity: 0.4,
  },
}));

interface Props {
  min: number;
  max: number;
  value: number[];
  onChange: (value: number[]) => void;
}

export default function AirbnbPriceRange({ min, max, value, onChange }: Props) {
  return (
    <AirbnbSlider
      value={value}
      min={min}
      max={max}
      onChange={(_, newValue) => onChange(newValue as number[])}
      valueLabelDisplay="auto"
      disableSwap
    />
  );
}
