import Breadcrumb from "@/components/layout/components/Breadcrumb";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Breadcrumb />
      <h1>Mis cursos</h1>
      <section>
        <div className="flex justify-between py-6">
          <h2>Últimas ventas</h2>
          <Link href="/crear-curso">
            <Button
              className="px-6 py-2 bg-primario500 text-white"
              variant="solid"
            >
              Crear cruso
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
