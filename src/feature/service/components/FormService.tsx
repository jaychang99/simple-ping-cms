import styled from '@emotion/styled';
import { Button, Form, Input, message } from 'antd';
import { useCreateService } from 'feature/service/hooks/useCreateService';

const { Item } = Form;

export const FormService = () => {
  const { trigger: createService, isMutating } = useCreateService();

  const handleFinish = async (values: any) => {
    try {
      await createService(values);
      message.success('서비스가 등록되었습니다.');
    } catch {
      message.error('서비스 등록에 실패했습니다.');
    }
  };

  return (
    <EmotionWrapper>
      <Form onFinish={handleFinish}>
        <Item name="name" label="이름" rules={[{ required: true }]}>
          <Input />
        </Item>
        <Item name="url" label="URL" rules={[{ required: true }]}>
          <Input />
        </Item>

        <Button type="primary" htmlType="submit" loading={isMutating}>
          등록
        </Button>
      </Form>
    </EmotionWrapper>
  );
};

const EmotionWrapper = styled.div`
  .ant-btn {
    float: right;
  }
`;
