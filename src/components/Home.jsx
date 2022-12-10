import Navbar from "./navbar/Navbar";
import { Route, Redirect, Routes } from "react-router-dom";


export default function Home(){
    return(
        <div>
        <section>
            <Routes>
                <Route path="/" element={<Navbar/>} />
            </Routes>
        </section>
        </div>
    )
}