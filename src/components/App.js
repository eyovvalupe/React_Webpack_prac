import React, { Suspense } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Loading from "./Loading";

const AsyncDynamicPage = React.lazy(() => import("./DynamicPage"));
const AsyncNoMatch = React.lazy(() => import("./NoMatch"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dynamic" element={<AsyncDynamicPage />} />
          <Route path="*" element={<AsyncNoMatch />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
