import React from "react";
import DragDrop from "../../components/DragDrop/DragDrop";

const DragDropPage = () => {
  return (
    <div>
      <DragDrop
        deleteButtonText={`Delete`}
        initialText={`Drag drop or click`}
        fileSizeErrorMsg={`Fole size should be less then 1 MB`}
        fileFormatErrorMsg={`Please add PDF formate`}
        errorButtonText={"close"}
      />
    </div>
  );
};

export default DragDropPage;
