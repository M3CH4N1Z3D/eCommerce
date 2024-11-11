import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://itechcolombia.co/wp-content/uploads/2022/05/iphone11-black-select-2019_GEO_EMEA-1.png",
    categoryId: 1,
    stock: 1,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://i.pinimg.com/originals/54/36/47/54364703b2568f8b7db719456c47ead3.png",
    categoryId: 2,
    stock: 2,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111979_ipad-pro-12-2018.png",
    categoryId: 3,
    stock: 3,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://photos5.appleinsider.com/price_guide/apple-watch-series-6-pp-header.png",
    categoryId: 9,
    stock: 4,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://png.pngtree.com/png-clipart/20230508/original/pngtree-airpods-png-image_9149137.png",
    categoryId: 4,
    stock: 5,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://www.apple.com/v/homepod-mini/j/images/overview/hero_homepod__cnpc7icpf1aq_large.png",
    categoryId: 9,
    stock: 6,
  },
  {
    name: "Iphone 16 pro max",
    price: 999,
    description: "Smartphone con pantalla de 6.5 pulgadas y 128GB de almacenamiento.",
    image: "https://www.celudmovil.com.co/cdn/shop/files/iphone-16-pro-max-colores.webp?v=1726071820",
    categoryId: 1,
    stock: 1,
  },
  {
    name: "Ipad",
    price: 499,
    description: "Tablet de 10 pulgadas con conectividad Wi-Fi y 64GB de almacenamiento.",
    image: "https://i02.appmifile.com/685_item_my/02/04/2024/570559d1992bed8c40c4ba5aca3ae12f!400x400!85.png",
    categoryId: 3,
    stock: 2,
  },
  {
    name: "AirPods",
    price: 299,
    description: "Auriculares inalámbricos con cancelación de ruido.",
    image: "https://png.pngtree.com/png-clipart/20211017/original/pngtree-in-ear-headphones-digital-music-products-electronic-equipment-png-image_6856386.png", 
    categoryId: 4,
    stock: 3,
  },
  {
    name: "MacBook",
    price: 1199,
    description: "Laptop con procesador i7, 16GB RAM y 512GB SSD.",
    image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-13s/images/pc/huawei-matebook-13s-mics-img-pc.png", 
    categoryId: 2,
    stock: 4,
  },
  {
    name: "Iwatch",
    price: 199,
    description: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-3/img/id/huawei-watch-3-strap-3-1.png",
    image: "/imagenes/productos/Iwatch.avif", 
    categoryId: 9,
    stock: 5,
  },
  {
    name: "Alexa",
    price: 89,
    description: "Altavoz portátil con Bluetooth y 10 horas de autonomía.",
    image: "https://www.pngarts.com/files/8/Alexa-Echo-PNG-Photo.png", 
    categoryId: 9,
    stock: 6,
  },
  {
    name: "GoPro",
    price: 149,
    description: "Cámara de acción resistente al agua y con grabación 4K.",
    image: "https://gopro.com/on/demandware.static/-/Sites-gopro-products/default/dwdc57b5af/images/Product%20Images/cameras/CHDHF-111-master/product-card-h11-mini-2x%20(1).png", 
    categoryId: 5,
    stock: 1,
  },
  {
    name: "PlayStatio 5",
    price: 799,
    description: "Consola de videojuegos de última generación.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png/1200px-PlayStation_5_and_DualSense_with_transparent_background.png", 
    categoryId: 9,
    stock: 2,
  },
  {
    name: "Teclado Mecánico",
    price: 59,
    description: "Teclado mecánico con retroiluminación RGB.",
    image: "https://d34vmoxq6ylzee.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/5/6/56R64AA-1_T1679069848.png", 
    categoryId: 9,
    stock: 3,
  },
  {
    name: "Ratón Ergonómico",
    price: 39,
    description: "Ratón inalámbrico ergonómico con sensor óptico.",
    image: "https://d1gb7gicmr8iau.cloudfront.net/fit-in/1920x800/Media/Images/Product/Side/22879_pictures_product_side_2.png", 
    categoryId: 9,
    stock: 4,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
