import React from "react";
import DragDrop from "../../components/DragDrop/DragDrop";
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
const DragDropPage = () => {
  const data = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Product Details', link: '/products/123' },
  ]
  return (
    <div>
      <BreadCrumb custom data={data} />
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
