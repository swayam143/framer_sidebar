import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as icons from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <icons.AiFillHome />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <icons.AiFillAppstore />,
  },
  {
    path: "/message",
    name: "Message",
    icon: <icons.AiFillMessage />,
  },
  {
    path: "/user",
    name: "User",
    icon: <icons.AiOutlineUserAdd />,
  },
  {
    path: "/file",
    name: "File",
    icon: <icons.AiFillFileAdd />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <div className="main_container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "40px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className="sidebar"
        >
          <div className="top_section">
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                Do Some Coding
              </motion.h1>
            )}
            <div className="bars">
              <icons.AiOutlineBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <icons.AiOutlineSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route) => (
              <NavLink
                // activeClassName="active"
                to={route.path}
                key={route.name}
                className={(navData) =>
                  navData.isActive ? "active link" : "link"
                }
                // className="link"
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
