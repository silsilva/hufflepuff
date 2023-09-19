import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { SearchResults } from "../pages/SearchResults";
import { Layout } from "../components/layout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Route>
    </Routes>
  );
}
export { AppRoutes };
