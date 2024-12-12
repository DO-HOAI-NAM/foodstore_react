import React, { useState } from "react";
import { Form, Select, Input, Radio, Row, Col, Upload, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { IoClose } from "react-icons/io5";
import moment from "moment";

import {
  changeUserNeedUpdateAvatar,
  deleteUserNeedUpdateAvatar,
  getIdentity,
  selectUserIsLoading,
  selectUserNeedUpdate,
  updateInformation,
} from "../../../store/slices/usersSlice";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import Spinner from "../../../components/Spinner";
import { useEffect } from "react";

const formItemLayout = {
  labelCol: {
    xl: {
      span: 24,
    },
    lg: {
      span: 24,
    },
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
  wrapperCol: {
    xl: {
      span: 24,
    },
    lg: {
      span: 24,
    },
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};

const { Option } = Select;

export default function UserForm() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState([]);
  const [oldImage, setOldImage] = useState(false);
  const isLoading = useSelector(selectUserIsLoading);
  const userNeedUpdate = useSelector(selectUserNeedUpdate);
  const [preview, setPreview] = useState({
    isOpen: false,
    name: "",
    src: "",
  });

  useEffect(() => {
    if (Object.keys(userNeedUpdate).length > 0) {
      form.setFieldsValue({
        email: userNeedUpdate.data.email,
        blood: "AB+",
        name: userNeedUpdate.data.name,
        phone: userNeedUpdate.data.phone,
        address: userNeedUpdate.data.address,
        gender: userNeedUpdate.data.gender
      });
    }
    console.log('user', userNeedUpdate)

  }, [form, userNeedUpdate]);

  const handlePreview = (file) => {
    setPreview({
      ...preview,
      src: userNeedUpdate.avatar[0].url,
      name: userNeedUpdate.avatar[0].name,
      isOpen: true,
    });
  };

  const handleClose = () => {
    setPreview({ ...preview, isOpen: false });
  };

  console.log('userNeedUpdate', userNeedUpdate);
  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("phone", `${values.phone}`);
    formData.append("gender", values.gender);
    if (oldImage) {
      formData.append("old_image", oldImage);
      formData.append("avatar", avatar[0]);
    }
    formData.append("user_id", userNeedUpdate.data.id);
    console.log('test');

    console.log('formData', formData);
    dispatch(updateInformation(formData));
    dispatch(getIdentity());
    window.location.reload(false);

  };

  return (
    <div className="userform-container">
      <Form
        form={form}
        scrollToFirstError
        {...formItemLayout}
        onFinish={handleSubmit}
        name="userForm"
        className="userForm"
      >
        {/* Upload */}
        <Row>
          <Col className="left" sm={24} md={12} lg={12} xl={12} xll={12}>
            {/* Email */}
            <Form.Item
              className="form-input-group"
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                },
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
              label="Email"
              name="email"
            >
              <Input disabled className="input" placeholder={userNeedUpdate.data?.email}/>
            </Form.Item>


            {/* Last Name */}
            <Form.Item
              className="form-input-group"
              rules={[
                {
                  required: true,
                  message: "Please enter your last name!",
                },
              ]}
              label="Name"
              name="name"
            >
              <Input className="input" placeholder={userNeedUpdate.data?.name} />
            </Form.Item>

            {/* Phone */}
            <Form.Item
              className="form-input-group"
              rules={[
                {
                  required: true,
                  message: "Please enter your phone!",
                },
              ]}
              label="Phone"
              name="phone"
            >
              <Input className="input" placeholder={userNeedUpdate.data?.phone}  />
            </Form.Item>
          </Col>
          <Col className="right" sm={24} md={12} lg={12} xl={12} xll={12}>
            {/* Blood group */}

           {/* Gender */}
           <Form.Item
              label="Gender"
              name="gender"
              className="form-input-group gender"
              rules={[
                {
                  required: true,
                  message: "Please select your gender!",
                },
              ]}
            >
              <Radio.Group className="input input-radio">
                <Radio value={true}>Female</Radio>
                <Radio value={false}>Male</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        {/* City */}


        <Form.Item>
          <Button type="submit" className="button button--blue--dark">
            <span>{isLoading ? <Spinner /> : "Save Changes"}</span>
          </Button>
        </Form.Item>
      </Form>
      <Modal
        className={`content ${preview.isOpen ? "active" : ""}`}
        isOpen={preview.isOpen}
        renderBody={() => (
          <div className="content content-preview">
            <div className="close-btn" onClick={handleClose}>
              <IoClose className="close-icon" />
            </div>
            <h3 className="title">{preview.name}</h3>
            <img className="modal-image" src={preview.src} alt="Preivew img" />
          </div>
        )}
        onClose={handleClose}
      />
    </div>
  );
}
