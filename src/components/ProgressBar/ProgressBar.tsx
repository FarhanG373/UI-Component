import React from "react";
import "./ProgressBar.scss";
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
export type type = "circular" | "starit";
export interface Props {
  customClass?: string;
  customId?: string;
  color: CssColorNames;
  progress: number;
  barHeight?: number;
  showProgress?: boolean;
  progressType?: type;
  progresForgroundColor?: CssColorNames;
  progresBackgroundColor?: CssColorNames;
  radiusWidth?: number;
  circleBackgroundColor?: CssColorNames;
}

const ProgressBar = ({
  customClass,
  customId,
  color,
  progress,
  barHeight,
  showProgress,
  progressType = "starit",
  progresForgroundColor,
  progresBackgroundColor,
  radiusWidth = 75,
  circleBackgroundColor,
}: Props) => {
  const style = {
    background: `radial-gradient(closest-side,  ${circleBackgroundColor} ${radiusWidth}%, transparent 0% 100%),conic-gradient(${progresForgroundColor} ${progress}%, ${progresBackgroundColor} 0)`,
  };

  return (
    <>
      {progressType === "starit" && (
        <div
          className={`progressBar${customClass ? " " + customClass : ""}`}
          id={customId}
          style={{
            borderColor: color,
            height: barHeight ? barHeight + "px" : "",
          }}
        >
          <div
            className="innerProgress"
            style={{ background: color, width: progress + "%" }}
          >
            {showProgress ? <span>{progress}% </span> : ""}
          </div>
        </div>
      )}
      {progressType === "circular" && (
        <div
          className={`progressBarCircle${customClass ? " " + customClass : ""}`}
          id={customId}
          style={style}
        >
          <div className="innerProgress">
            {showProgress ? <span>{progress}% </span> : ""}
          </div>
        </div>
      )}
    </>
  );
};
export default ProgressBar;
