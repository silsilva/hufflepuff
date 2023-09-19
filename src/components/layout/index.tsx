import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../SearchForm";
import css from "./layout.css";

function Layout() {
  return (
    <div className={css.root}>
      <header className={css.prueba}>
        <SearchForm />
      </header>
      <Outlet />
      <footer>Soy el footer</footer>
    </div>
  );
}

export { Layout };
