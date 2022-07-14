import { MdDashboard, MdAssignment, MdExitToApp } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const MenuLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: <MdDashboard />,
  },
  {
    name: "Perfil",
    path: "/",
    icon: <CgProfile />,
  },
  {
    name: "Posts",
    path: "/",
    icon: <MdAssignment />,
  },
  {
    name: "Sair",
    path: "/exit",
    icon: <MdExitToApp />,
  },
];

export default MenuLinks;
