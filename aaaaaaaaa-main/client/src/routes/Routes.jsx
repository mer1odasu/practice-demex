import {useAuth} from "../hooks/useAuth.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "../components/screens/not-found/NotFound.jsx";
import {routes} from "./routes.data.js";
const Router = () => {
    const { isAuth } = useAuth()

    return (
        <BrowserRouter>
            <Routes>
                {routes.map(route => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    )
                })}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router