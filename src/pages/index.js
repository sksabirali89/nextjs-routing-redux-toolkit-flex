"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "./../redux/store";
import "./../styles/App.css";
import Sidebar from "./../components/Sidebar";
import Todo from "./../components/Todo";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="container">
        <Sidebar />
        <Todo />
      </div>
    </Provider>
  );
}
