import React from "react";
import auth from "./auth";
import Header from './Header';
import { Menu } from "./Menu";
import Footer from './Footer';
import PostDataTable from "./table-postdata";
import "./dashboard.css"

export const Table = props => {
  return (
    <>
    <div>
      <div class="wrapper">
      <Header/>
      <Menu/>
      <PostDataTable/>
      <Footer/>
      <button id="btn3"
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
      </div>
    </div>
    </>
  );
};