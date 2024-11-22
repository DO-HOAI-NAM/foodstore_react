import React from 'react';
import { Col, Form, Input, Row, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  changePassword,
  selectUserIsLoading,
  selectCurrentUser,
} from '../../../store/slices/usersSlice';
import Button from '../../../components/Button';
import Spinner from '../../../components/Spinner';

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export default function ChangePasswordForm() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectUserIsLoading);
  const currentUser = useSelector(selectCurrentUser);

  const handleSubmit = async (values) => {
    try {
      await dispatch(
        changePassword({
          password: values.new_password,
          id: currentUser.data.id,
        })
      );
      form.resetFields();
      navigate('/profile/user-form');
      notification.success({
        message: 'Password Changed Successfully',
      });
    } catch (error) {
      notification.error({
        message: 'Password Change Failed',
        description: error.message || 'An error occurred while changing your password.',
      });
    }
  };

  return (
    <div className="changePassword-form-container">
      <Row>
        <Col span={12}>
          <Form
            form={form}
            name="changePassword"
            onFinish={handleSubmit}
            {...formItemLayout}
          >
            <Form.Item
              name="current_password"
              label="Current password"
              rules={[{ required: true, message: 'Please input your current password!' }]}
            >
              <Input.Password placeholder="Enter your current password!" />
            </Form.Item>

            <Form.Item
              name="new_password"
              label="New password"
              rules={[
                { required: true, message: 'Please input your new password!' },
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    'Password must include 8+ characters, uppercase, lowercase, number, and special character.',
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Enter your new password!" />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['new_password']}
              hasFeedback
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('new_password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm your password!" />
            </Form.Item>

            <Form.Item>
              <Button
                type="submit"
                className="button button--blue--dark"
                disabled={isLoading}
              >
                <span>{isLoading ? <Spinner /> : 'Save Changes'}</span>
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
