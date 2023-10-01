import styled from '@emotion/styled';
import { Menu } from 'antd';
import { MENU_ITEM_LIST } from 'components/layout/constants/menuItemList';

interface Props {
  onClickMenuItem?: () => void;
}

const MenuList = ({ onClickMenuItem }: Props) => {
  return (
    <EmotionWrapper>
      <Menu
        mode="inline"
        items={MENU_ITEM_LIST}
        style={{
          border: 'none',
          backgroundColor: 'transparent',
        }}
        onClick={onClickMenuItem}
      />
    </EmotionWrapper>
  );
};

export default MenuList;

const EmotionWrapper = styled.div`
  padding-top: 32px;
  margin-left: -32px;
  margin-right: -32px;
`;
