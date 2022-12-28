import Navbar from "./navbar/Navbar";
import LandingPage from "./landingPage/landingPage";
import { Route, Redirect, Routes } from "react-router-dom";


export default function Home(){
    return(
        <div>
        <section>
            <Routes>
                <Route path="/" element={[<Navbar key={1}/>,<LandingPage key={2}/>]} />
            </Routes>
        </section>
        </div>
    )
}