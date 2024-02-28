import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routing } from "../src/Constants/constant";
import Header from "../src/Components/Header";
import MenuList from "../src/Components/MenuList";
import {styled} from "@mui/styles"

const CanbDashboard = styled('div')({
  display: "flex",
  flexDirection: "row",
  height: "100%"
})
const MainPage = styled('div')({
width:"100%"
})

const App =() => {
  return (
    <>
      <CanbDashboard>
        <MenuList />
        <MainPage>
          <Header />
          <Routes>
            {routing.map((product, index) => {
              return (
                <Route
                  key={index}
                  path={product.path}
                  element={product.element}
                ></Route>
              );
            })}
          </Routes>
        </MainPage>
      </CanbDashboard>
    </>
  );
}

export default App;
