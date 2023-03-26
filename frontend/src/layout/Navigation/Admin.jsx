import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  SettingOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import saslogo from "../../download.jpeg";

const { Sider } = Layout;
const { SubMenu } = Menu;

function NavigationAdmin() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
        }}
      >
        <div className="whitebox">
          <img src={saslogo} width="100" className="logoside pad 10" />
        </div>

        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/" />
            Home Page
          </Menu.Item>
          <Menu.Item key="2" icon={<CustomerServiceOutlined />}>
            <Link to="/customer">Client</Link>
          </Menu.Item>
          {/* <Menu.Item key="24" icon={<UserOutlined />}>
            <Link to="/selectcustomer">Custom Select Customer</Link>
          </Menu.Item> */}
          {/* <Menu.Item key="21" icon={<FileTextOutlined />}>
            <Link to="/lead" />
            Lead
          </Menu.Item>
          <Menu.Item key="3" icon={<FileSyncOutlined />}>
            <Link to="/product" />
            Product
          </Menu.Item> */}
          <Menu.Item key="31" icon={<TeamOutlined />}>
            <Link to="/admin" />
            Franchise Management
          </Menu.Item>

          {/* <Menu.Item key="32" icon={<SettingOutlined />}>
            <Link to="/settings" />
            Settings
          </Menu.Item> */}
        </Menu>
      </Sider>
    </>
  );
}
export default NavigationAdmin;
