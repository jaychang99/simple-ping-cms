import { MenuOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import MenuList from 'components/layout/components/MenuList';
import UserProfile from 'components/layout/components/UserProfile';
import { useState } from 'react';

interface Props {}

const MobileSidebar = ({}: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClickSidebarToggle = () => {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  };

  return (
    <EmotionWrapper>
      <button onClick={handleClickSidebarToggle}>
        <MenuOutlined />
      </button>

      {isSidebarOpen && (
        <div className="mobile-sidebar">
          <UserProfile />
          <MenuList onClickMenuItem={handleClickSidebarToggle} />
        </div>
      )}
    </EmotionWrapper>
  );
};

export default MobileSidebar;

const EmotionWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.device.mobile} {
    display: block;
  }

  button {
    position: absolute;
    top: 40px;
    right: 40px;
  }

  .mobile-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    width: 100%;
    height: 100%;

    padding: 32px;
    width: 80%;
    background-color: #fff;
    box-shadow: ${({ theme }) => theme.shadow.default};
  }
`;
