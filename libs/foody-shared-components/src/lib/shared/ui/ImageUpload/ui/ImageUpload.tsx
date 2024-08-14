import { useState } from 'react';
import styles from './FileUpload.module.scss';
import { Text } from '../../Text';

export function ImageUpload() {
  //   const [selectedFiles, setSelectedFiles] = useState([]);
  //   const [previewUrls, setPreviewUrls] = useState([]);
  //   const handleFileChange = event => {
  //     const files = event.target.files;
  //     const newSelectedFiles = Array.from(files);
  //     const isMultiple = typeof multiple === 'undefined' ? false : multiple;
  //     if (isMultiple) {
  //       const validFiles = newSelectedFiles.filter(file =>
  //         fileType === 'image' ? file.type.startsWith('image/') : file.type === 'application/pdf',
  //       );
  //       setSelectedFiles([...selectedFiles, ...validFiles]);
  //       const fileReaders = validFiles.map(file => {
  //         const fileReader = new FileReader();
  //         fileReader.readAsDataURL(file);
  //         return fileReader;
  //       });
  //       Promise.all(
  //         fileReaders.map(
  //           fileReader =>
  //             new Promise(resolve => {
  //               fileReader.onload = () => {
  //                 resolve(fileReader.result);
  //               };
  //             }),
  //         ),
  //       ).then(results => {
  //         setPreviewUrls([...previewUrls, ...results]);
  //       });
  //     } else {
  //       const firstValidFile = newSelectedFiles.slice(0, 1);
  //       setSelectedFiles([...firstValidFile]);
  //       const fileReader = new FileReader();
  //       fileReader.readAsDataURL(firstValidFile[0]);
  //       fileReader.onload = () => {
  //         setPreviewUrls([fileReader.result]);
  //       };
  //     }
  //   };
  //   return (
  //     <div className={`file-upload ${className}`}>
  //       <div className="upload-container">
  //         <label className="label">{labelName}</label>
  //         <div className="upload-box">
  //           <input
  //             type="file"
  //             accept={fileType === 'image' ? 'image/*' : '.pdf'}
  //             className="file-input"
  //             onChange={handleFileChange}
  //             multiple={typeof multiple === 'undefined' ? false : multiple}
  //           />
  //           <div className="icon-text-container">
  //             <img src="/images/img_iconsfileuploadline.svg" className="icon" />
  //             <Text className="text" size="txtPoppinsRegular12">
  //               PNG, GIF, WEBP, MP4. Max 500Mb.
  //             </Text>
  //           </div>
  //         </div>
  //       </div>
  //       {previewUrls.map((previewUrl, index) => (
  //         <div key={index} className="preview-container">
  //           {fileType === 'image' ? (
  //             <img src={previewUrl} alt="Preview" />
  //           ) : (
  //             <embed key={index} src={previewUrl} type="application/pdf" />
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //   );
}
