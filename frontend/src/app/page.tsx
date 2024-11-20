import CardShop from "@/components/cards/shop/CardShop";
import CardShopConnect from "@/components/cards/shop/CardShopConnect";
import CardSection from "@/components/common/CardSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 my-10" >

        <CardSection
          title="Cursos recomendados"
          description="Descubre los cursos más destacados y lleva tus habilidades al siguiente nivel. Aprende de expertos y aplica tus conocimientos en proyectos reales."
        >
          <CardShop isFor="course" />
          <CardShop isFor="course" platform="Power Apps" />
        </CardSection>

        <CardSection
          title="Aplicaciones recomendadas"
          description="Explorá soluciones listas para usar. Encontrá la app perfecta para tu proyecto y empezá a trabajar de inmediato."
        >
          <CardShop isFor="app" />
          <CardShop isFor="app" platform="Power Apps" />
          <CardShop isFor="app" />
        </CardSection>

        <CardSection
          button={false}
        >
          <CardShopConnect />
          <CardShopConnect platform="Power Apps" />
          <CardShopConnect />
        </CardSection>

      </div >
    </>
  );
}
