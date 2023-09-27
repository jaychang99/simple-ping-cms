import styled from '@emotion/styled';
import { Button, Form, Input } from 'antd';

const { Item } = Form;

export const FormService = () => {
  return (
    <EmotionWrapper>
      <Form>
        <Item name="name" label="이름" rules={[{ required: true }]}>
          <Input />
        </Item>
        <Item name="url" label="URL" rules={[{ required: true }]}>
          <Input />
        </Item>

        <Button type="primary" htmlType="submit">
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
