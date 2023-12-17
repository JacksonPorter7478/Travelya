import React from "react";
import tw from "twin.macro";
import "./App.css";
import { Footer } from "./components/footer";
import { ExploreSection } from "./containers/ExploreSection";
import { TopSection } from "./containers/TopSection";

function App() {
  return (
    <AppContainer>
      <TopSection />
      <ExploreSection />
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = tw.div`
	flex
	flex-col
	w-full
	h-full
	overflow-hidden
`;
