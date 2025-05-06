import { Outlet } from "react-router-dom";
import NavbarProyectos from "../components/Navbar/NavbarProjects";
import Footer from "../components/Footer/Footer";

const ProjectLayout = () => {
  return (
    <>
      <NavbarProyectos />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default ProjectLayout;
