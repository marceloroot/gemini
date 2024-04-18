import Header from "@/components/header";
import PlaceOrders from "@/components/placeorder";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <Header />
     <div className="p-12">
     <PlaceOrders />
     </div>
     </>

  );
}
