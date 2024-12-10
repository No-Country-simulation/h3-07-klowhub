"use client";
import { useAuth } from "@/stores/userAuth";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import Modal from "../../modals/Modal";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeaderClient() {
  const { user, logout } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [isCreatorMode, setIsCreatorMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const menuAdministrador = [
    { url: "/dashboard", text: "Dashboard" },
    { url: "/usuarios-y-contenido", text: "Gestión de usuarios y contenido" },
    { url: "/configuracion", text: "Configuración" },
    { url: "/estadisticas", text: "Transacciones y estadísticas" },
    { url: "/revision-de-contenidos", text: "Revisión de contenidos" },
    { url: "/soporte", text: "Soporte" },
  ];
  const menuExplorador = [
    { url: "/user-dashboard", text: "Dashboard" },
    { url: "/cursos-y-lecciones", text: "Cursos y lecciones" },
    { url: "/appstore", text: "Appstore" },
    { url: "/proyectos", text: "Proyectos" },
    { url: "/consultoria", text: "Consultoría" },
    { url: "/sobre", text: "Sobre KlowHub" },
  ];
  const menuCreador = [
    { url: "/seller-dashboard", text: "Dashboard" },
    { url: "/creador/creador", text: "Ganancias" },
    { url: "/creador/creador", text: "Mis productos" },
    { url: "/creador/creador", text: "Ver proyectos disponibles" },
  ];

  useEffect(() => {
    setMounted(true);
    setIsCreatorMode(user?.role === "seller");
  }, [user]);

  const getCurrentMenu = () => {
    if (!user) return menuExplorador;
    switch (user.role) {
      case "admin":
        return menuAdministrador;
      case "seller":
        return isCreatorMode ? menuCreador : menuExplorador;
      default:
        return menuExplorador;
    }
  };

  const handleUserMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (user?.role === "user") {
      event.preventDefault();
      setIsModalOpen(true);
      return;
    }
    setIsCreatorMode(event.target.checked);
  };

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  if (!mounted) {
    return null; // or a loading placeholder
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="¿Desea convertirse en Vendedor?"
      >
        <div className="flex flex-col gap-4">
          <p className="text-sm">
            Al aceptar será dirigido al asistente para completar los
            requerimientos.
          </p>
        </div>
        <div className="flex w-full justify-end gap-5 mt-6">
          <Button type="button" onClick={() => setIsModalOpen(false)}>
            Cerrar
          </Button>
          <Button
            type="button"
            onClick={() => {
              router.push("/up-to-seller");
              setIsModalOpen(false);
            }}
            className="bg-primario400 text-white hover:bg-primario600"
          >
            Quiero convertirme en Vendedor!
          </Button>
        </div>
      </Modal>
      <nav className="flex gap-2 xl:gap-6 items-center z-10">
        <Image
          src="/assets/icons/klowhub.png"
          alt="Klowhub logo"
          height={50}
          width={50}
          className="text-xs"
        />
        <NavLink url="#" text="Home" />
        {getCurrentMenu().map((menu) => (
          <NavLink key={menu.text} url={menu.url} text={menu.text} />
        ))}
      </nav>
      <div className="flex gap-8 pr-10 xl:text-base text-sm items-center z-10">
        <section className="flex gap-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66732 18.3332C7.12755 18.3332 7.50065 17.9601 7.50065 17.4998C7.50065 17.0396 7.12755 16.6665 6.66732 16.6665C6.20708 16.6665 5.83398 17.0396 5.83398 17.4998C5.83398 17.9601 6.20708 18.3332 6.66732 18.3332Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.8333 18.3332C16.2936 18.3332 16.6667 17.9601 16.6667 17.4998C16.6667 17.0396 16.2936 16.6665 15.8333 16.6665C15.3731 16.6665 15 17.0396 15 17.4998C15 17.9601 15.3731 18.3332 15.8333 18.3332Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.70898 1.7085H3.37565L5.59232 12.0585C5.67363 12.4375 5.88454 12.7764 6.18874 13.0167C6.49294 13.257 6.87141 13.3838 7.25898 13.3752H15.409C15.7883 13.3746 16.1561 13.2446 16.4515 13.0067C16.747 12.7688 16.9524 12.4373 17.034 12.0668L18.409 5.87516H4.26732"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 6.66699C5 5.34091 5.52678 4.06914 6.46447 3.13146C7.40215 2.19378 8.67392 1.66699 10 1.66699C11.3261 1.66699 12.5979 2.19378 13.5355 3.13146C14.4732 4.06914 15 5.34091 15 6.66699C15 12.5003 17.5 14.167 17.5 14.167H2.5C2.5 14.167 5 12.5003 5 6.66699Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.58398 17.5C8.72347 17.7537 8.92852 17.9653 9.17773 18.1127C9.42693 18.26 9.71113 18.3378 10.0007 18.3378C10.2902 18.3378 10.5744 18.26 10.8236 18.1127C11.0728 17.9653 11.2778 17.7537 11.4173 17.5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.666 3.3335H3.33268C2.41221 3.3335 1.66602 4.07969 1.66602 5.00016V15.0002C1.66602 15.9206 2.41221 16.6668 3.33268 16.6668H16.666C17.5865 16.6668 18.3327 15.9206 18.3327 15.0002V5.00016C18.3327 4.07969 17.5865 3.3335 16.666 3.3335Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.3327 5.8335L10.8577 10.5835C10.6004 10.7447 10.3029 10.8302 9.99935 10.8302C9.69575 10.8302 9.39829 10.7447 9.14102 10.5835L1.66602 5.8335"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </section>
        {user?.role !== "admin" && (
          <section className="flex gap-4 flex-grow items-center">
            <p>{user?.role === "seller" ? "Creador" : "Explorador"}</p>
            <div className="flex items-center">
              <input
                className="react-switch-checkbox"
                type="checkbox"
                id="UserMode"
                onChange={handleUserMode}
                checked={isCreatorMode}
              />
              <label htmlFor="UserMode" className="react-switch-label">
                <span className="react-switch-button" />
              </label>
            </div>
          </section>
        )}
        <section className="cursor-pointer relative group">
          <Image
            onClick={() => router.push("/profile")}
            src={user?.profileImage || "/assets/avatars/foto1.png"}
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full hover:shadow-lg"
          />
          <div className="opacity-0 group-hover:opacity-100 hover:opacity-100 absolute top-12 -right-2 bg-white p-2 rounded-md shadow-md text-sm transition-opacity duration-400">
            <p className="text-black" onClick={handleLogout}>
              Logout
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
