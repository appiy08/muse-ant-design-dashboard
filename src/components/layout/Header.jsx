/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Col,
  Drawer,
  Dropdown,
  Input,
  List,
  Row,
  Switch,
  Typography
} from "antd";

import {
  FacebookFilled,
  SearchOutlined,
  StarOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import { get, replace } from "lodash";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  BellIcon,
  ClockIcon,
  CreditIcon,
  LogSettingIcon,
  ProfileHomeIcon,
  SettingIcon,
  ToggleIcon,
  WiFiIcon,
} from "../../assets/icons";
import avatar from "../../assets/images/team-2.jpg";

const ButtonContainer = styled.div`
  .ant-btn-primary {
    background-color: #1890ff;
  }
  .ant-btn-success {
    background-color: #52c41a;
  }
  .ant-btn-yellow {
    background-color: #fadb14;
  }
  .ant-btn-black {
    background-color: #262626;
    color: #fff;
    border: 0px;
    border-radius: 5px;
  }
  .ant-switch-active {
    background-color: #1890ff;
  }
`;

const Header = ({
  placement,
  name,
  subName,
  onPress,
  handleFixedNavbar,
  handleSidenavColor,
  handleSidenavType,
}) => {
  const { Title, Text } = Typography;

  const [visible, setVisible] = useState(false);
  const [sidenavType, setSidenavType] = useState("transparent");

  const [notifications] = useState([
    {
      key: "1",
      label: "New message from Sophie",
      title: "New message from Sophie",
      description: `${ClockIcon} 2 days ago`,
      icon: <Avatar src={avatar} shape="square" />,
    },
    {
      key: "2",
      label: "New album by Travis Scott",
      title: "New album by Travis Scott",
      description: `${ClockIcon} 2 days ago`,
      icon: <Avatar icon={WiFiIcon} shape="square" />,
    },
    {
      key: "3",
      label: "Payment completed",
      title: "Payment completed",
      description: `${ClockIcon} 2 days ago`,
      icon: <Avatar icon={CreditIcon} shape="square" />,
    },
  ]);

  useEffect(() => window.scrollTo(0, 0));

  const showDrawer = () => setVisible(true);
  const hideDrawer = () => setVisible(false);

  return (
    <>
      <div className="setting-drwer" onClick={showDrawer}>
        <SettingIcon />
      </div>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb
            items={[{ title: "Pages" }, { title: replace(name, "/", "") }]}
          />
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {replace(subName, "/", "")}
            </span>
          </div>
        </Col>
        <Col span={24} md={18} className="header-control">
          <Badge size="small" count={4}>
            <Dropdown
              trigger={["click"]}
              menu={{ notifications }}
              dropdownRender={(menu) => {
                console.log("menu ::>>", menu);
                return (
                  <List.Item>
                    <List.Item.Meta
                      avatar={get(menu, "icon")}
                      title={get(menu, "title")}
                      description={get(menu, "description")}
                    />
                  </List.Item>
                );
              }}
            >
              <a
                href="#pablo"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <BellIcon />
              </a>
            </Dropdown>
          </Badge>
          <Button type="link" onClick={showDrawer}>
            <LogSettingIcon />
          </Button>
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => onPress()}
          >
            <ToggleIcon />
          </Button>
          <Drawer
            className="settings-drawer"
            mask={true}
            width={360}
            onClose={hideDrawer}
            placement={placement}
            open={visible}
          >
            <div>
              <div className="header-top">
                <Title level={4}>
                  Configurator
                  <Text className="subtitle">See our dashboard options.</Text>
                </Title>
              </div>

              <div className="sidebar-color">
                <Title level={5}>Sidebar Color</Title>
                <div className="theme-color mb-2">
                  <ButtonContainer>
                    <Button
                      type="primary"
                      onClick={() => handleSidenavColor("#1890ff")}
                    >
                      1
                    </Button>
                    <Button
                      type="success"
                      onClick={() => handleSidenavColor("#52c41a")}
                    >
                      1
                    </Button>
                    <Button
                      type="danger"
                      onClick={() => handleSidenavColor("#d9363e")}
                    >
                      1
                    </Button>
                    <Button
                      type="yellow"
                      onClick={() => handleSidenavColor("#fadb14")}
                    >
                      1
                    </Button>

                    <Button
                      type="black"
                      onClick={() => handleSidenavColor("#111")}
                    >
                      1
                    </Button>
                  </ButtonContainer>
                </div>

                <div className="sidebarnav-color mb-2">
                  <Title level={5}>Sidenav Type</Title>
                  <Text>Choose between 2 different sidenav types.</Text>
                  <ButtonContainer className="trans">
                    <Button
                      type={sidenavType === "transparent" ? "primary" : "white"}
                      onClick={() => {
                        handleSidenavType("transparent");
                        setSidenavType("transparent");
                      }}
                    >
                      TRANSPARENT
                    </Button>
                    <Button
                      type={sidenavType === "white" ? "primary" : "white"}
                      onClick={() => {
                        handleSidenavType("#fff");
                        setSidenavType("white");
                      }}
                    >
                      WHITE
                    </Button>
                  </ButtonContainer>
                </div>
                <div className="fixed-nav mb-2">
                  <Title level={5}>Navbar Fixed </Title>
                  <Switch onChange={(e) => handleFixedNavbar(e)} />
                </div>
                <div className="ant-docment">
                  <ButtonContainer>
                    <Button type="black" size="large">
                      FREE DOWNLOAD
                    </Button>
                    <Button size="large">VIEW DOCUMENTATION</Button>
                  </ButtonContainer>
                </div>
                <div className="viewstar">
                  <a href="#pablo">{<StarOutlined />} Star</a>
                  <a href="#pablo"> 190</a>
                </div>

                <div className="ant-thank">
                  <Title level={5} className="mb-2">
                    Thank you for sharing!
                  </Title>
                  <ButtonContainer className="social">
                    <Button type="black">{<TwitterOutlined />}TWEET</Button>
                    <Button type="black">{<FacebookFilled />}SHARE</Button>
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </Drawer>
          <Link to="/sign-in" className="btn-sign-in">
            <ProfileHomeIcon />
            <span>Sign in</span>
          </Link>
          <Input
            className="header-search"
            placeholder="Type here..."
            name="search"
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
    </>
  );
};

Header.propTypes = {
  placement: PropTypes.string,
  name: PropTypes.string,
  subName: PropTypes.string,
  onPress: PropTypes.func,
  handleSidenavColor: PropTypes.func,
  handleSidenavType: PropTypes.func,
  handleFixedNavbar: PropTypes.func,
};

export default Header;
