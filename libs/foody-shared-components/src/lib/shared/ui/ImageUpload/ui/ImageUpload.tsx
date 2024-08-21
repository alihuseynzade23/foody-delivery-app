import { useState, ChangeEvent } from 'react';
import styles from './ImageUpload.module.scss';
import uploadAdmin from '../../../../../../../../apps/foody-admin/src/shared/assets/upload.svg';
import uploadClient from '../../../../../../../../apps/foody-client/src/shared/assets/upload.svg';
import { Text, TextTheme } from '../../Text';

interface ImageUploadProps {
  labelName?: string;
  className?: string;
  theme?: 'admin' | 'client';
}

export function ImageUpload({ labelName, className = '', theme = 'admin' }: ImageUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        if (fileReader.result) {
          setPreviewUrl(fileReader.result.toString());
        }
      };
    }
  };

  const themeClass = theme === 'client' ? styles.clientTheme : styles.adminTheme;

  return (
    <div className={`${styles.fileUpload} ${themeClass} ${className}`}>
      {previewUrl && (
        <div className={styles.previewContainer}>
          <img src={previewUrl} alt="Preview" />
        </div>
      )}
      <div className={styles.uploadContainer}>
        <label className={styles.label}>{labelName}</label>
        <div className={styles.uploadBox}>
          <input
            type="file"
            accept="image/*"
            className={styles.fileInput}
            onChange={handleFileChange}
          />
          <div className={styles.iconTextContainer}>
            <img src={theme === 'client' ? uploadClient : uploadAdmin } className={styles.icon} alt="Upload Icon" />
            <Text children="upload" theme={TextTheme.WHITE} className={styles.text} />
          </div>
        </div>
      </div>
    </div>
  );
}
