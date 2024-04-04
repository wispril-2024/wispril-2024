"use client"
import React, { useState, useRef, ChangeEvent, ReactNode } from 'react';
interface ImageUploadButtonProps{
  children: ReactNode;
  className: string;
  onImage: (image: string | null) => void;
}
const ImageUploadButton: React.FC<ImageUploadButtonProps> = ({children,className, onImage}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          onImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <button className={className} onClick={handleButtonClick}>{children}</button>
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageUploadButton;

