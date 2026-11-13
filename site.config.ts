import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Oksi Bakehouse",
  tagline: "Ukrainian home baking, from medovyk to oreshki and trubochky.",
  category: "Ukrainian home baking",
  schemaType: "Bakery",
  area: "Mississauga and the GTA, ON",
  siteUrl: "https://oksi-bakehouse-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#9a6b48" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Home baking in Mississauga and the GTA",
    headline: "Medovyk, syrnyky, oreshki and trubochky, made at home",
    subhead: "Ukrainian cakes, cookies and savoury bakes, made to order. Send a message on Instagram to order.",
    images: [
      { src: "/images/post-4.jpg", alt: "A slice of medovyk honey cake from Oksi Bakehouse", width: 1062, height: 1416 },
      { src: "/images/post-2.jpg", alt: "A slice of Spartak chocolate honey cake from Oksi Bakehouse", width: 1080, height: 1436 },
      { src: "/images/post-1.jpg", alt: "Syrnyky from Oksi Bakehouse", width: 1080, height: 1440 },
    ],
    primaryCta: { label: "Order by Instagram DM", href: "https://ig.me/m/oksi_bakehouse" },
    secondaryCta: { label: "See the baking", href: "#gallery" },
  },

  highlights: [
    "Medovyk honey cake and Spartak",
    "Syrnyky, oreshki and trubochky",
    "Savoury sausage rolls and pyrizhky",
    "Orders by Instagram Direct",
  ],

  about: {
    title: "Welcome to Oksi Bakehouse",
    body: [
      "Oksi Bakehouse is a Ukrainian home bakery in Mississauga, serving the GTA. The menu includes medovyk honey cake, Spartak chocolate honey cake, syrnyky, oreshki, trubochky, sausage rolls and pyrizhky.",
      "Orders are taken by Instagram Direct.",
    ],
    image: { src: "/images/post-4.jpg", alt: "A slice of medovyk honey cake from Oksi Bakehouse", width: 1062, height: 1416 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "Send a message to ask about current availability and a quote.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Medovyk", description: "Honey cake with cream. A prune version (medivnyk with prunes) has also been posted." },
          { name: "Spartak", description: "Chocolate honey cake with cream and chocolate glaze." },
        ],
      },
      {
        title: "Cookies and sweets",
        items: [
          { name: "Syrnyky", description: "Farmer cheese pancakes, with a filling of your choice." },
          { name: "Oreshki", description: "Nut cookies with boiled condensed milk (dulce de leche) and a roasted nut inside." },
          { name: "Trubochky", description: "Crisp pastry tubes with boiled condensed milk or Raffaello cream." },
        ],
      },
      {
        title: "Savoury bakes",
        items: [
          { name: "Sausage rolls", description: "Soft dough around a sausage, finished with sesame." },
          { name: "Pyrizhky", description: "Stuffed buns. A posted batch was filled with liver, and other fillings can be requested." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent bakes",
    items: [
      { src: "/images/post-4.jpg", width: 1062, height: 1416, alt: "A slice of medovyk honey cake from Oksi Bakehouse", caption: "Medovyk", href: "https://www.instagram.com/p/DfOPZYrkYs8/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1436, alt: "A slice of Spartak chocolate honey cake from Oksi Bakehouse", caption: "Spartak", href: "https://www.instagram.com/p/DfOQRY5EebA/" },
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "Syrnyky from Oksi Bakehouse", caption: "Syrnyky", href: "https://www.instagram.com/p/DfOQciXkUYg/" },
      { src: "/images/post-9.jpg", width: 960, height: 1280, alt: "Medovyk with prunes from Oksi Bakehouse", caption: "Medovyk with prunes", href: "https://www.instagram.com/p/DeXqu3MkaAW/" },
      { src: "/images/post-6.jpg", width: 960, height: 1280, alt: "Trubochky with cream from Oksi Bakehouse", caption: "Trubochky", href: "https://www.instagram.com/p/DfDpHrLkfjX/" },
      { src: "/images/post-7.jpg", width: 960, height: 1280, alt: "A box of trubochky from Oksi Bakehouse", caption: "Trubochky in a box", href: "https://www.instagram.com/p/De5kdItEe3K/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1440, alt: "Sausage rolls from Oksi Bakehouse", caption: "Sausage rolls", href: "https://www.instagram.com/p/DfGgT3NEXNG/" },
      { src: "/images/post-8.jpg", width: 960, height: 1280, alt: "Meat pyrizhky from Oksi Bakehouse", caption: "Pyrizhky", href: "https://www.instagram.com/p/DeXq5qrEfVN/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "oksi_bakehouse",
    embeds: ["https://www.instagram.com/p/DfOPZYrkYs8/", "https://www.instagram.com/p/DfOQRY5EebA/", "https://www.instagram.com/p/DfOQciXkUYg/"],
  },

  order: {
    label: "How to order",
    title: "Order in a Direct message",
    intro: "Send a message on Instagram with what you would like to order and the date you need it.",
    dmMessage: "Hi Oksi Bakehouse! I would like to order.\nItems:\nDate needed:\nPickup or delivery notes:",
    headerCtaLabel: "DM to order",
    links: [{ label: "Order by Instagram DM", href: "https://ig.me/m/oksi_bakehouse" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a message on Instagram with the items you would like and the date you need them." },
    { q: "Where are you based?", a: "Oksi Bakehouse is a home bakery in Mississauga, serving the GTA." },
    { q: "What do you bake?", a: "Ukrainian home baking, including medovyk, Spartak, syrnyky, oreshki, trubochky, sausage rolls and pyrizhky." },
  ],

  contact: {
    title: "Contact",
    area: "Mississauga and the GTA, Ontario",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/oksi_bakehouse/" }],
  },

  seo: {
    title: "Oksi Bakehouse | Ukrainian home baking in Mississauga",
    description: "Ukrainian home baking in Mississauga and the GTA, including medovyk, Spartak, syrnyky, oreshki and trubochky. Send a message on Instagram to order.",
    keywords: ["Ukrainian bakery Mississauga", "medovyk GTA", "Oksi Bakehouse"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
