import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Accueil from "../pages/Accueil/Accueil";
import Login from "../pages/Login/Login";
import Profil from "../pages/Profil/Profil";
import Logout from "../pages/Logout/Logout";


function RoutesPath() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profil" element={<Profil />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default RoutesPath;