import DashCard from "@/components/cards/DashCard";
import StarsCalification from "@/components/common/StarsCalification";
import Breadcrumb from "@/components/layout/components/Breadcrumb";
import { getCourseById } from "@/utils/courses/courses";
import Image from "next/image";

interface PageProps {
  params: {
    id: string;
  };
}
const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const courseData = await getCourseById(id);

  return (
    <div className="w-full justify-center items-center text-3xl ">
      <Breadcrumb />
      {courseData && (
        <section className="flex gap-20 justify-between">
          <div className="flex flex-col gap-5 px-6 py-10">
            <h2 className="text-base font-bold">{courseData?.courseName}</h2>
            <p className="text-sm">{courseData?.courseDescription}</p>
            <div className="flex items-center gap-3 w-full">
              <span className="font-bold">3</span>
              <StarsCalification value={2} />
              <span className="text-gray-500">(136)</span>
            </div>
            <div>
              <iframe
                width="880"
                height="344"
                src="https://www.youtube.com/embed/OG6YGMF0UPM"
                title="Aprende las Novedades de React 19: Nuevos Hooks, Actions, API (con ejemplos)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <Image
                src="/assets/videoCarrousel.png"
                alt="carrousel"
                width={880}
                height={100}
              />
              <DashCard>
                <div className="my-10 flex gap-5 flex-col">
                  <h3 className="text-base font-bold">Beneficios</h3>
                  <p className="text-sm font-semibold">{courseData.benefits}</p>
                </div>
                <div className="my-10 flex gap-5 flex-col">
                  <h3 className="text-base font-bold">Requisitos</h3>
                  <p className="text-sm font-semibold">
                    {courseData.requirements}
                  </p>
                </div>
              </DashCard>
            </div>
          </div>
          <DashCard classNames="w-1/4">userName</DashCard>
        </section>
      )}
    </div>
  );
};

export default page;
