import React from "react";
import { NavLink } from "react-router-dom";
import { HeadWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "@/common/local-data.js";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function AppHeader() {
  // 渲染路由
  const showNav = headerLinks.map((item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} className="select-item" key={item.link}>
          {item.title}
          <span className="icon"></span>
        </NavLink>
      );
    } else {
      return (
        <a
          target="_blank"
          href={item.link}
          className="select-item"
          key={item.link}
        >
          {item.title}
        </a>
      );
    }
  });

  return (
    <HeadWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <NavLink to="/" className="logo sprite_01"></NavLink>
          {showNav}
        </HeaderLeft>
        <HeaderRight>
          <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} className="search"/>
          <button className="creator">创作者中心</button>
          <a href="/#/" className="login">登录</a>
        </HeaderRight>
      </div>
      <div className="devider"></div>
    </HeadWrapper>
  );
}
