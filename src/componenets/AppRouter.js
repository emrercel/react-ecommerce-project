import react from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Categories} from './Categories';
function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/categories/:name" element ={<Categories/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
