import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center mx-3">
      <div className="cardContainer">
        <Image
          src="/image-product-mobile.jpg"
          width="375"
          height="200"
          alt="image product mobile"
          className="rounded-t-lg xl:hidden"
        />
        <Image
          src="/image-product-desktop.jpg"
          width={300}
          height={150}
          alt="image product mobile"
          className="hidden rounded-l-lg xl:block"
        />
        <div className="flex flex-col gap-6 justify-center ">
          <div className="textContainer">
            <p className="perfoumeText">perfume</p>
            <p className="nameText">Gabrielle Essence Eau De Parfum</p>
            <p className="description">
              A floral, solar and voluptuous interpretaion composed by Olivier{" "}
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>
          <div className="priceContainer">
            <p className="priceText">$149.99</p>
            <p className="priceDiscountText">$169.99</p>
          </div>
          <button className="btnAddtoCart">
            <Image src="/icon-cart.svg" width={15} height={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
