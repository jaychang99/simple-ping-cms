import styled from '@emotion/styled';
import { Table } from 'antd';
import MediaMobileOnly from 'components/mediaQuery/MediaMobileOnly';
import MediaNoneMobileOnly from 'components/mediaQuery/MediaNoneMobileOnly';
import PageSubTitle from 'components/typography/PageSubTitle';
import UserItemMobile from 'feature/user/user.list/components/UserItemMobile';
import useGetUsers from 'feature/user/hooks/useGetUsers';
import { ColumnUserList } from 'feature/user/user.list/components/ColumnUserList';

interface Props {}

const ViewUserList = ({}: Props) => {
  const { data, mutate } = useGetUsers({
    shouldFetch: true,
  });

  return (
    <EmotionWrapper>
      <PageSubTitle>유저 목록</PageSubTitle>
      <MediaNoneMobileOnly>
        <Table columns={ColumnUserList({ mutate })} dataSource={data} />
      </MediaNoneMobileOnly>
      <MediaMobileOnly>
        <div className="mobile-user-list-container">
          {data?.map((user) => {
            return (
              <UserItemMobile
                key={user.uuid}
                uuid={user.uuid}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                isAdmin={user.isAdmin}
                mutate={mutate}
              />
            );
          })}
        </div>
      </MediaMobileOnly>
    </EmotionWrapper>
  );
};

export default ViewUserList;

const EmotionWrapper = styled.div`
  .mobile-user-list-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
