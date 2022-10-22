import React, { useState } from 'react';
import styled from 'styled-components';
import { UploadOutlined } from '@ant-design/icons';
import DefaultIcon from '../assets/img/icon.png';
const StyledWrapper = styled.div`
  position: relative;
  .avatar {
    width: 4rem;
    height: 4rem;
  }
  .edit {
    position: absolute;
    right: -5px;
    bottom: 0;
    overflow: hidden;
    font-size: 0.8rem;
    input {
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
      z-index: 2;
      cursor: pointer;
    }
    .icon {
      z-index: 1;
    }
  }
`;

export default function Avatar({ url = '', editable = false }) {
  const [imgSrc, setImgSrc] = useState(url);
  const handleEditAvatar = ({ target: { files } }) => {
    const [file] = files;
    var reader = new FileReader();

    reader.addEventListener(
      'load',
      function () {
        setImgSrc(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleImageError = () => {
    setImgSrc(DefaultIcon);
  };
  return (
    <StyledWrapper contentEditable={false}>
      <img src={imgSrc} alt="avatar" onError={handleImageError} className="avatar" />
      {editable && (
        <p className="edit">
          <input
            onChange={handleEditAvatar}
            type="file"
            name="avatar"
            id="avatar"
            accept="image/*"
          />
          <UploadOutlined data-html2canvas-ignore className="icon" />
        </p>
      )}
    </StyledWrapper>
  );
}
