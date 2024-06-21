"use client";
import expertiseData from "@/data/expertiseData";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { Button, Checkbox, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { GoMail } from "react-icons/go";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineEventNote } from "react-icons/md";
import { send } from "./SendMail";

const { bgImages } = expertiseData;

const Reachus: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = async (values: {
    name: string;
    email: string;
    phone: string;
    requirement: string;
    message: string;
  }) => {
    try {
      setSubmitting(true);
      const emailSent = await send(values);
      if (emailSent.success) {
        setSubmitting(false);
        // Swal.fire({
        //   title: "Success!",
        //   text: "Form Submitted Successfully",
        //   icon: "success",
        // });
        window.location.href = "/thankyou";
        form.resetFields();
      } else {
        setSubmitting(false);
        Swal.fire({
          title: "Failed!",
          text: emailSent.error || "Form Submission Failed!",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitting(false);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while submitting the form",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div
        id="reachus"
        className="block pt-24 pb-12"
        // style={{
        //   background: `url(${bgImages.src})`,
        // }}
      >
        <div className="block pb-2 lg:pb-7">
          <h2
            // style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
            className="lg:text-5xl md:text-4xl text-3xl pb-4 text-center font-bold text-[#4f4d4d]"
          >
            <span className="folksco-color">REACH </span>US
          </h2>
        </div>
        <div className="lg:flex px-4 md:px-8">
          <div className="lg:w-1/2 w-full lg:px-6">
            <div className="p-5">
              <Form
                form={form}
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={handleFormSubmit}
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your Name!" },
                  ]}
                >
                  <Input
                    type="text"
                    className="border-[#ed7936] border-2 py-3 hover:border-[#ed7936] mb-2"
                    suffix={
                      <UserOutlined className="site-form-item-icon text-xl" />
                    }
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your Email!" },
                  ]}
                >
                  <Input
                    type="email"
                    className="border-[#ed7936] border-2 py-3 hover:border-[#ed7936] mb-2"
                    suffix={<GoMail className="site-form-item-icon text-xl" />}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: "Please input your phone!" },
                  ]}
                >
                  <Input
                    type="number"
                    className="border-[#ed7936] border-2 py-3 hover:border-[#ed7936] mb-2"
                    suffix={
                      <BiSolidPhoneCall className="site-form-item-icon text-2xl" />
                    }
                    placeholder="Mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="requirement"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Requirement!",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    className="border-[#ed7936] border-2 py-3 hover:border-[#ed7936] mb-2"
                    suffix={
                      <MdOutlineEventNote className="site-form-item-icon text-xl" />
                    }
                    placeholder="Requirement"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[
                    { required: true, message: "Please input your Message!" },
                  ]}
                >
                  <TextArea
                    className="border-[#ed7936] border-2 py-3 hover:border-[#ed7936] mb-2"
                    maxLength={500}
                    style={{ height: 100, resize: "none" }}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Form.Item>
                <Form.Item className="text-center">
                  <Button
                    htmlType="submit"
                    className="bg-[#ed7936] h-auto px-10 py-2 text-lg text-white font-bold hover:text-[#ed7936] hover:border-[#ed7936]"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:px-6">
            <div className="md:w-full flex justify-center items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15086.804463944327!2d73.068077!3d19.0328876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c39a2a064c1f%3A0xd513f4a17bf6f9da!2sFolkco%20Interior%20Designer!5e0!3m2!1sen!2sin!4v1715595625714!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-black border-4 border-solid;"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reachus;
