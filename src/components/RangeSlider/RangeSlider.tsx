import React from "react";
import "./RangeSlider.scss";
export type CssColorNames =
  | "AliceBlue"
  | "AntiqueWhite"
  | "Aqua"
  | "Aquamarine"
  | "Azure"
  | "Beige"
  | "Bisque"
  | "Black"
  | "BlanchedAlmond"
  | "Blue"
  | "BlueViolet"
  | "Brown"
  | "BurlyWood"
  | "CadetBlue"
  | "Chartreuse"
  | "Chocolate"
  | "Coral"
  | "CornflowerBlue"
  | "Cornsilk"
  | "Crimson"
  | "Cyan"
  | "DarkBlue"
  | "DarkCyan"
  | "DarkGoldenRod"
  | "DarkGray"
  | "DarkGrey"
  | "DarkGreen"
  | "DarkKhaki"
  | "DarkMagenta"
  | "DarkOliveGreen"
  | "DarkOrange"
  | "DarkOrchid"
  | "DarkRed"
  | "DarkSalmon"
  | "DarkSeaGreen"
  | "DarkSlateBlue"
  | "DarkSlateGray"
  | "DarkSlateGrey"
  | "DarkTurquoise"
  | "DarkViolet"
  | "DeepPink"
  | "DeepSkyBlue"
  | "DimGray"
  | "DimGrey"
  | "DodgerBlue"
  | "FireBrick"
  | "FloralWhite"
  | "ForestGreen"
  | "Fuchsia"
  | "Gainsboro"
  | "GhostWhite"
  | "Gold"
  | "GoldenRod"
  | "Gray"
  | "Grey"
  | "Green"
  | "GreenYellow"
  | "HoneyDew"
  | "HotPink"
  | "IndianRed"
  | "Indigo"
  | "Ivory"
  | "Khaki"
  | "Lavender"
  | "LavenderBlush"
  | "LawnGreen"
  | "LemonChiffon"
  | "LightBlue"
  | "LightCoral"
  | "LightCyan"
  | "LightGoldenRodYellow"
  | "LightGray"
  | "LightGrey"
  | "LightGreen"
  | "LightPink"
  | "LightSalmon"
  | "LightSeaGreen"
  | "LightSkyBlue"
  | "LightSlateGray"
  | "LightSlateGrey"
  | "LightSteelBlue"
  | "LightYellow"
  | "Lime"
  | "LimeGreen"
  | "Linen"
  | "Magenta"
  | "Maroon"
  | "MediumAquaMarine"
  | "MediumBlue"
  | "MediumOrchid"
  | "MediumPurple"
  | "MediumSeaGreen"
  | "MediumSlateBlue"
  | "MediumSpringGreen"
  | "MediumTurquoise"
  | "MediumVioletRed"
  | "MidnightBlue"
  | "MintCream"
  | "MistyRose"
  | "Moccasin"
  | "NavajoWhite"
  | "Navy"
  | "OldLace"
  | "Olive"
  | "OliveDrab"
  | "Orange"
  | "OrangeRed"
  | "Orchid"
  | "PaleGoldenRod"
  | "PaleGreen"
  | "PaleTurquoise"
  | "PaleVioletRed"
  | "PapayaWhip"
  | "PeachPuff"
  | "Peru"
  | "Pink"
  | "Plum"
  | "PowderBlue"
  | "Purple"
  | "RebeccaPurple"
  | "Red"
  | "RosyBrown"
  | "RoyalBlue"
  | "SaddleBrown"
  | "Salmon"
  | "SandyBrown"
  | "SeaGreen"
  | "SeaShell"
  | "Sienna"
  | "Silver"
  | "SkyBlue"
  | "SlateBlue"
  | "SlateGray"
  | "SlateGrey"
  | "Snow"
  | "SpringGreen"
  | "SteelBlue"
  | "Tan"
  | "Teal"
  | "Thistle"
  | "Tomato"
  | "Turquoise"
  | "Violet"
  | "Wheat"
  | "White"
  | "WhiteSmoke"
  | "Yellow"
  | "YellowGreen";
  export type Orient = 'vertical' | 'horizontal';
export interface Props {
  min: number;
  max: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  firstGradiant?: CssColorNames;
  secondGradiant?: CssColorNames;
  secondaryBgColor?: CssColorNames;
  customClasses?: string;
  disabled?: boolean;
  customId?: string;
  step?: number;
  rangeValue?: boolean;
  orient?: Orient;
  
}
const RangeSlider = ({
  max,
  min,
  value = 0,
  onChange,
  firstGradiant,
  secondGradiant,
  secondaryBgColor,
  customClasses,
  customId,
  disabled = false,
  rangeValue,
  step,
  orient = 'horizontal',
 
}: Props) => {
  const percentage = (100 * (value - min)) / (max - min);
  const rangerStyle = {
    background: `linear-gradient(90deg, ${
      firstGradiant ? firstGradiant : "#222"
    } 0, ${secondGradiant ? secondGradiant : "#222"} ${percentage}%, ${
      secondaryBgColor ? secondaryBgColor : "#e7e7e7"
    } ${percentage + 0.1}%)`,
  };

  return (
    <div className="rangeWrap">
      <input
        id={customId ? " " + customId : ""}
        className={`rangeSliderInput${
          customClasses ? " " + customClasses : ""
        }${orient ? ' '+orient :''}`}
        style={rangerStyle}
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        disabled={disabled}
        step={step}
      />
      {rangeValue && <span className="rangeValue">{value}</span>}
    </div>
  );
};

export default RangeSlider;
