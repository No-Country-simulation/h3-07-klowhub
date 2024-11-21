const ContainerCard = ({
  children,
  sectionClass,
}: {
  children: React.ReactNode;
  sectionClass: string;
}) => {
  return (
    <section
      className={`odd:my-5  mx-5 p-6 bg-[#1F2937] rounded-lg shadow-[0px_0px_20px_0px_#00000004] ${sectionClass}`}
    >
      {children}
    </section>
  );
};

export default ContainerCard;
