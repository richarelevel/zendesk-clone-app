import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
  
const Nav = styled.div`
  background: #17494D;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.5rem;
`;
  
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 0.8rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
  
const SidebarNav = styled.nav`
  background: #fafafa;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  color: white;
  margin-top: 2.5rem;
`;
  
const SidebarWrap = styled.div`
  width: 100%;
  color:black;
`;
  
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  
  const hideSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={hideSidebar} style={{ color: "white" }}/>
          </NavIcon>
          <h1
            style={{ textAlign: "center", 
                     marginLeft: "50px", 
                     color: "white" }}
          >
            Zendesk Clone
          </h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
  
export default Sidebar;