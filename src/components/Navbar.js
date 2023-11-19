import React, { useState } from "react";
import { ImMusic } from "react-icons/im";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AddMusic from "./AddMusic";
import { AiFillFolderAdd } from "react-icons/ai";
import { searchMusic } from "../redux/selectedAction";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
const dispatch=useDispatch()
  const openModal = () => {
    setModalOpen(!modalOpen);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

const handleSearch=e=>{
  dispatch(searchMusic(e.target.value))
}

  return (
    <NavbarMain className="navbar">
      <NavbarContainer className="navbar_container">
        <Link to="/" className="logo">
          <ImMusic className="icon" />
        </Link>
        <div className="input">
          <input type="text" placeholder="Search music ...." onChange={handleSearch} />
        </div>
        <div className="Add_Container">
          <AddMusic showModal={modalOpen} closeModal={closeModal} />
          <p>Add music </p>
          <AiFillFolderAdd className="icon" onClick={() => openModal()} />
        </div>
      </NavbarContainer>
    </NavbarMain>
  );
};

//styled component start here//

const NavbarMain = styled.div`
  margin: 0 0 3rem 0;
  padding: 0.5rem;
  width: 100%;
  top: 0;
  height: 120px;
`;
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 40px;
    height: 40px;
    margin: 0 2rem;
    color: var(--color-white);
    // border:1px solid white;
    .icon {
      width: 100%;
      height: 100%;
    }
    .icon:hover {
      color: var(--color-gray);
      transition: 0.5s;
    }
  }
  .input {
    width: 400px;
    height: 100px;
    margin: 2rem 0.5rem;
    input {
      width: 100%;
      padding: 0.6rem 3rem;
      font-size: 1.2rem;
      font-weight: 500;
      font-family: var(--font-family);
      border-radius: 20px;
      color: var(--color-white);
      border-color: var(--color-golden);
    }
  }
  .Add_Container {
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 0 2rem;
    padding: 0 2rem;
    width: 20%;
    p {
      font-size: 1.4rem;
      font-weight: 500;
      font-family: var(--font-family);
      color: var(--color-golden);
    }
    .icon {
      width: 40px;
      height: 40px;
      color: var(--color-white);
      cursor: pointer;
    }
    .icon:hover {
      color: var(--color-gray);
      transition: 0.8s;
    }
  }
`;

export default Navbar;
