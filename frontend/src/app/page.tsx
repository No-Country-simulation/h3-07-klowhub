import CardShop from "@/components/cards/shop/CardShop";
import CardShopConnect from "@/components/cards/shop/CardShopConnect";
import Divider from "@/components/divider/Divider";

export default function Home() {
  return (
    <>
      ola xd
      <div className="flex flex-col items-center justify-center gap-5" >
        <Divider />
        <CardShop isFor="course" />
        <Divider />
        <CardShop isFor="app" />
        <Divider />
        <CardShopConnect />
      </div>
    </>
  );
}
