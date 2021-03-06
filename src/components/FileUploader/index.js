import React, { useState, useRef } from "react";
import Input from "react-validation/build/input";
import styled from "styled-components";
import { IconUpload, IconX } from "@tabler/icons";

const FileUploadContainer = styled.section`
  position: relative;
  margin: 25px 0 15px;
  border: 4px dotted #e6e6e6;
  padding: 35px 20px;
  border-radius: 0.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const FormField = styled.input`
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &:focus {
    outline: none;
  }
`;

const InputLabel = styled.label`
  color: #757575;
  position: absolute;
  font-size: 16px;
  top: 13px;
  left: 15px;
  transition: all 0.2s ease;

  ${(props) =>
    props.focused &&
    `
      font-size: 13px;
  transform: translateY(-23px) translateX(-5px);
  z-index: 501;
  background: white;
  padding: 0 8px;
    `}
`;

const DragDropText = styled.p`
  margin-top: 15px;
  font-weight: bold;
  letter-spacing: 1.2px;
  text-align: center;
`;

const UploadFileBtn = styled.button`
  /* box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #3498db;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 1.1em 2.8em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 6px;
  color: #3498db;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 250ms ease-in-out;
  font-family: "Open Sans", sans-serif;
  width: 45%;
  display: flex;
  align-items: center;
  padding-right: 0;
  justify-content: center;

  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: #3498db;
    z-index: -1;
    transition: width 250ms ease-in-out;
  }

  svg {
    font-size: 22px;
    margin-right: 12px;
    border-right: 2px solid;
    // position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 500px) {
    width: 70%;
  }

  @media only screen and (max-width: 350px) {
    width: 100%;
  }

  &:hover {
    color: #fff;
    outline: 0;
    background: transparent;

    svg {
      transition: stroke 250ms ease-in-out;
      stroke: #fff;
    }

    &:after {
      width: 110%;
    }
  }

  &:focus {
    outline: 0;
    background: transparent;
  }

  &:disabled {
    opacity: 0.4;
    filter: grayscale(100%);
    pointer-events: none;
  } */

  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 1;
  padding: 1.1em 2.8em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #6d64ff;
  appearance: none;
  z-index: 1;
`;

const FilePreviewContainer = styled.article`
  position: relative;
  margin-bottom: 35px;
  border: 1px solid #eee;
  padding: 35px 20px;
  border-radius: 0.25em;
  display: none;

  ${(props) =>
    props.preview &&
    `
        display: block;
    `}
`;

const PreviewList = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

const FileMetaData = styled.div`
  display: ${(props) => (props.isImageFile ? "none" : "flex")};
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  background-color: rgba(5, 5, 5, 0.55);

  aside {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
`;

const RemoveFileIcon = styled.i`
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;

const FilePreviewLabel = styled.span`
  color: #757575;
  position: absolute;
  top: 13px;
  left: 15px;
  transition: all 0.2s ease;
  font-size: 13px;
  transform: translateY(-23px) translateX(-5px);
  z-index: 501;
  background: white;
  padding: 0 8px;
`;

const PreviewContainer = styled.section`
  padding: 0.25rem;
  width: 100px;
  border-radius: 6px;
  box-sizing: border-box;

  &:hover {
    opacity: 0.55;

    ${FileMetaData} {
      display: flex;
    }
  }

  & > div:first-of-type {
    height: 100%;
    position: relative;
  }

  @media only screen and (max-width: 750px) {
    width: 25%;
  }

  @media only screen and (max-width: 500px) {
    width: 50%;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
    padding: 0 0 0.4em;
  }
`;

const ImagePreview = styled.img`
  border-radius: 6px;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.div`
  background-image: ${(props) => (props.image ? `url(${props.image})` : "")};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  width: 100%;
`;

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUploader = ({
  label,
  updateFilesCb,
  uploadedFile,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});
  const [focused, setFocused] = React.useState(false);
  const [fileDialog, setFileDialog] = React.useState(false);
  const [filePreview, setFilePreview] = React.useState(false);

  const handleOnFocus = (e) => {
    if (fileDialog && focused) {
      if (!files.length) setFocused(false);
      setFileDialog(false);
      e.target.blur();
    } else setFocused(true);
  };

  const handleOnBlur = () => {
    if (focused && !fileDialog) setFileDialog(true);
    else setFileDialog(false);
  };

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size < maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    setFilePreview(true);
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });

    if (!otherProps.multiple) {
      setFocused(false);
    }

    if (Object.keys(files).length === 0) {
      setFilePreview(false);
    }
  };

  const isFocused = focused || files.length;

  return (
    <>
      <FileUploadContainer onFocus={handleOnFocus} onBlur={handleOnBlur}>
        <InputLabel focused={isFocused}>{label}</InputLabel>
        {uploadedFile && <StyledImage image={uploadedFile} />}
        <DragDropText>
          {uploadedFile ? "Zmień" : "Dodaj"}{" "}
          {otherProps.multiple ? "pliki" : "plik"} korzystając z metody
          Drag&Drop lub{" "}
        </DragDropText>
        <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
          <span> Wybierz {otherProps.multiple ? "pliki" : "plik"} z dysku</span>
        </UploadFileBtn>
        <FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </FileUploadContainer>
      <FilePreviewContainer preview={filePreview}>
        <FilePreviewLabel>
          {otherProps.multiple ? "Załączone pliki" : "Załączony plik"}
        </FilePreviewLabel>
        <PreviewList>
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            let isImageFile = file.type.split("/")[0] === "image";
            return (
              <PreviewContainer key={fileName}>
                <div>
                  {isImageFile && (
                    <ImagePreview
                      src={URL.createObjectURL(file)}
                      alt={`file preview ${index}`}
                    />
                  )}
                  <FileMetaData isImageFile={isImageFile}>
                    <span>{file.name}</span>
                    <aside>
                      <span>{convertBytesToKB(file.size)} kb</span>
                      <RemoveFileIcon onClick={() => removeFile(fileName)}>
                        {" "}
                        X{" "}
                      </RemoveFileIcon>
                    </aside>
                  </FileMetaData>
                </div>
              </PreviewContainer>
            );
          })}
        </PreviewList>
      </FilePreviewContainer>
    </>
  );
};

export default FileUploader;
