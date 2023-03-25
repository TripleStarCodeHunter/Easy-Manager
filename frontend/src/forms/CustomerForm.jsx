import React from "react";
import { Button, Form, Input, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";

export default function CustomerForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Franchise Name"
        name="franchise_company"
        rules={[
          {
            required: true,
            message: "Please input the name of your franchise name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Surname"
        name="surname"
        rules={[
          {
            required: true,
            message: "Please input your surname!",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingRight: "5px",
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name"
        name="first_name"
        rules={[
          {
            required: true,
            message: "Please input your First name!",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingLeft: "5px",
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="contact_no"
        label="Phone"
        rules={[
          {
            required: true,
            message: "Please input your phone!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: "Please input your address!",
          },
        ]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item
        label="Gender"
        name="gender"
        rules={[
          {
            required: true,
            message: "Please input your gender!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        rules={[
          {
            required: true,
            message: "Please input your age!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Marital Status"
        name="marital_status"
        rules={[
          {
            required: true,
            message: "Please input your marital status!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Height"
        name="height"
        rules={[
          {
            required: true,
            message: "Please input your height!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Weight"
        name="weight"
        rules={[
          {
            required: true,
            message: "Please input your weight!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Diet"
        name="vegetarian"
        rules={[
          {
            required: true,
            message: "Please input your diet!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      
    </>
  );
}
