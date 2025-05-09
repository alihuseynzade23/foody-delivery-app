import { useState, ChangeEvent, useRef, useEffect } from 'react';
import styles from './ImageUpload.module.scss';
import uploadAdmin from '../../../assets/upload-admin.svg';
import uploadClient from '../../../assets/upload-client.svg';
import { Text, TextTheme } from '../../Text';
import { imageStore } from '../../../lib/store/image';

interface ImageUploadProps {
  labelName?: string;
  className?: string;
  theme?: 'admin' | 'client';
}

export const ImageUpload = ({
  labelName = 'Upload image',
  className = '',
  theme = 'admin',
}: ImageUploadProps) => {
  const { setImage, image, url } = imageStore();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        if (fileReader.result) {
          const resultUrl = fileReader.result.toString();
          setPreviewUrl(resultUrl);
        }
      };

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  useEffect(() => {
    if (url) {
      setPreviewUrl(url);
      setImage(image);
    }
  }, [url, setPreviewUrl]);

  return (
    <div className={`${styles.fileUpload} ${className}`}>
      <div className={styles.uploadContainer}>
        <div className={styles.imageContainer}>
          <label className={styles.label}>{labelName}</label>
          {previewUrl && image && (
            <div className={styles.previewContainer}>
              <img src={previewUrl} alt="Preview" />
            </div>
          )}
        </div>
        <div className={styles.uploadBox}>
          <input
            type="file"
            accept="image/*"
            className={styles.fileInput}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <div className={styles.iconTextContainer}>
            <img
              src={theme === 'client' ? uploadClient : uploadAdmin}
              className={styles.icon}
              alt="Upload Icon"
            />
            <Text children="upload" theme={TextTheme.WHITE} className={styles.text} />
          </div>
        </div>
      </div>
    </div>
  );
};
