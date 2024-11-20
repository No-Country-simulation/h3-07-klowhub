import CardShop from "@/components/cards/shop/CardShop";
import CardShopConnect from "@/components/cards/shop/CardShopConnect";
import Divider from "@/components/divider/Divider";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 my-10" >
        <div className="flex justify-evenly w-full flex-wrap">
          <CardShop isFor="course" />
          <CardShop isFor="course" platform="Power Apps" />
        </div>
        <Divider />
        <div className="flex justify-evenly w-full flex-wrap">
          <CardShop isFor="app" platform="Power Apps" />
          <CardShop isFor="app" />
          <CardShop isFor="app" platform="Power Apps" />
        </div>
        <Divider />
        <div className="flex justify-evenly w-full flex-wrap">
          <CardShopConnect />
          <CardShopConnect platform="Power Apps" />
          <CardShopConnect />
        </div>
      </div>
    </>
  );
}
