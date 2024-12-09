import DashCard from "@/components/cards/DashCard";
import Breadcrumb from "@/components/layout/components/Breadcrumb";
import { getCourses } from "@/utils/courses/courses";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const page = async () => {
  const courses = await getCourses();
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
        <DashCard>
          <DashCard classNames="h-[200px]">
            <p>Listado de clientes a los que se les vendió cursos</p>
          </DashCard>
          <section className="my-10 grid grid-cols-4 gap-5">
            {courses &&
              courses.data.map(
                (course: {
                  id: number;
                  courseName: string;
                  courseDescription: string;
                }) => (
                  <DashCard key={course.id} classNames="h-[200px]">
                    <h2 className="mb-6 font-bold">{course.courseName}</h2>
                    <p className="text-sm font-semibold">
                      {course.courseDescription}
                    </p>
                  </DashCard>
                )
              )}
          </section>
        </DashCard>
      </section>
    </div>
  );
};

export default page;
