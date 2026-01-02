import { Routes, Route } from "react-router-dom";
import { Main } from "@/ui/components/main/Main";
import {ProjectsPage} from "@/ui/header/menu/projects";
import {AboutPage} from "@/ui/header/menu/about";
import {FeedBackPage} from "@/ui/header/menu/feedback";

export const Routing = () => (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/feedback" element={<FeedBackPage />} />
    </Routes>
);
