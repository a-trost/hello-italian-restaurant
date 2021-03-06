// pages/_app.js
import React from "react";
import NextApp from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/global.css";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
