/* eslint-disable no-unreachable */
import React, { useState } from "react";
import useDragAndDrop from "./useDragAndDrop";
import Heading from "../Heading/Heading";
import "./DragDrop.scss";

export interface Props {
  initialText: any;
  subText?: any;
  icon?: any;
  errorButtonText: any;
  deleteButtonText: any;
  fileSizeErrorMsg: any;
  fileFormatErrorMsg: any;
  headingType?: any;
  sugHeadingType?: any;
  dragDropClass?: any;
  fileNameHeading?: any;
  iconClass?:any;
}

const DragDrop = ({
  initialText,
  subText,
  errorButtonText="X",
  deleteButtonText="delete",
  fileSizeErrorMsg,
  fileFormatErrorMsg,
  icon,
  headingType = "h2",
  sugHeadingType = "h6",
  dragDropClass,
  fileNameHeading = 'h2',
  iconClass
}: Props) => {
  const {
    dragOver,
    setDragOver,
    onDragOver,
    onDragLeave,
    fileDropError,
    setFileDropError,
  } = useDragAndDrop();
  const [file, setFile] = useState<File | null>();

  const onDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragOver(false);
    const selectedFile = e?.dataTransfer?.files[0];
    if (selectedFile.type.split("/")[1] !== "pdf") {
      return setFileDropError(fileFormatErrorMsg);
    }
    if (selectedFile.size > 1 * 1000 * 1024) {
      return setFileDropError(fileSizeErrorMsg);
    }
    setFile(selectedFile);
  };

  const fileSelect = (e: any) => {
    let selectedFile = e.target.files[0] || e?.dataTransfer?.files[0];
    let file_size = e.target.files[0].size;
    if (selectedFile?.type.split("/")[1] !== "pdf") {
      return setFileDropError(fileFormatErrorMsg);
    }
    if (file_size > 1 * 1000 * 1024) {
      return setFileDropError(fileSizeErrorMsg);
    }
    setFile(selectedFile);
    setFileDropError("");
  };

  const clear = () => {
    setFile(null);
    setFileDropError(null);
    setDragOver(false);
  };

  return (
    <div
      className={`DragDrop${dragOver ? " draging" : ""}${
        dragDropClass ? " " + dragDropClass : ""
      }`}
    >
      <form>
        {fileDropError && (
          <span className="file-drop-error">
            {fileDropError}
            <button onClick={clear}>{errorButtonText}</button>
          </span>
        )}
        <label
          htmlFor="file"
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          {file && (
            <div>
              <Heading
                    children={file.name}
                    Type={fileNameHeading}
                  ></Heading>
              <div className="file-properties">
                <ul>
                  <li>File Size - {Number(file.size /(1 * 100 * 1024)).toFixed(2)}MB</li>
                  <li>File Type - {file.type}</li>
                </ul>
              </div>
            </div>
          )}
          {!file && (
            <>
              {!dragOver ? (
                <>
                  {icon && <span className={iconClass}>{icon}</span>}
                  <Heading
                    children={initialText}
                    Type={headingType}
                  ></Heading>
                  {subText && (
                    <Heading children={subText} Type={sugHeadingType} />
                  )}
                </>
              ) : (
                "Drop here..."
              )}
            </>
          )}
        </label>
        <input type="file" name="file" id="file" onChange={fileSelect} />
        {file && <button onClick={clear}>{deleteButtonText}</button>}
      </form>
    </div>
  );
};

export default DragDrop;
