import React, { useEffect, useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import PromptPage from "./Pages/PromptPage";
import SecondPromptPage from "./Pages/SecondPromptPage";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./components/Preloader/Preloader";
import LayOut from "./components/Layout/LayOut";
import ThirdPromptPage from "./Pages/ThirdPromptPage";
import ForthPromptPage from "./Pages/ForthPromptPage";
import About from "./Pages/About";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import News from "./Pages/News";
import FifthPromptPage from "./Pages/FifthPromptPage";

function Home() {
  return (
    <>
      <Hero />
      <ImageSlider />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader part
    const timer = setTimeout(() => setLoading(false), 2500);

    // AOS animation
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in",
      delay: 90,
    });

    AOS.refresh();

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HashRouter>
        <div className="min-h-screen flex flex-col">
          {loading ? (
            <Preloader />
          ) : (
            <>
              <ScrollToTop />

              <Routes>
                <Route
                  path="/"
                  element={
                    <LayOut>
                      <Home />
                    </LayOut>
                  }
                />
                <Route
                  path="/prompt"
                  element={
                    <LayOut>
                      <PromptPage />
                    </LayOut>
                  }
                />
                <Route
                  path="/secondprompt"
                  element={
                    <LayOut>
                      <SecondPromptPage />
                    </LayOut>
                  }
                />
                <Route
                  path="/thirdprompt"
                  element={
                    <LayOut>
                      <ThirdPromptPage />
                    </LayOut>
                  }
                />
                <Route
                  path="/forthpromptpage"
                  element={
                    <LayOut>
                      <ForthPromptPage />
                    </LayOut>
                  }
                />
                <Route
                  path="/fifthpromptpage"
                  element={
                    <LayOut>
                      <FifthPromptPage />
                    </LayOut>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <LayOut>
                      <About />
                    </LayOut>
                  }
                />
                <Route
                  path="/news"
                  element={
                    <LayOut>
                      <News />
                    </LayOut>
                  }
                />
                <Route path="/element" element={<LayOut></LayOut>} />
              </Routes>
            </>
          )}
        </div>
      </HashRouter>
    </>
  );
}

export default App;
