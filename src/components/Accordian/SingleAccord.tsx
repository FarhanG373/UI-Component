import { Children, useEffect, useRef, useState } from "react";
import { getRefValue } from "./Ref";
import './Accordian.scss';
export interface Props {
  title: [];
  content: [];
  isOpen: boolean;
  btnOnClick: () => void;
  children?:any
}
const SingleAccord = ({ title, content, isOpen, btnOnClick, children }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = getRefValue(contentRef);

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li className={`accordion-item ${isOpen ? "active" : ""}`}>
      <h2 className="accordion-item-title">
        <button className="accordion-item-btn" onClick={btnOnClick}>
          {title ? title : children}
        </button>
      </h2>
      <div
        className="accordion-item-container"
        style={{
          height: `${height}px`,
          overflow: isOpen ? "visible" : "hidden",
        }}
      >
        <div ref={contentRef} className="accordion-item-content">
          {content ? content : children}
        </div>
      </div>
    </li>
  );
};

export default SingleAccord;
