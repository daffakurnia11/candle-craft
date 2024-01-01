const listProduct = [
  // BUBBLE CANDLE DATA
  {
    category: "Scented Bubble Candle",
    slug: "bubble-candle",
    name: "Bubble Candle",
    image: [
      "bubble-3x3-white-1.jpg",
      "bubble-3x3-white-2.jpg",
      "bubble-3x3-yellow-1.jpg",
      "bubble-3x3-yellow-2.jpg",
      "bubble-3x3-green-1.jpg",
      "bubble-3x3-green-2.jpg",
      "bubble-3x3-pink-1.jpg",
      "bubble-3x3-pink-2.jpg",
      "bubble-3x3-blue-1.jpg",
      "bubble-3x3-blue-2.jpg",
      "bubble-3x3-purple-1.jpg",
      "bubble-3x3-purple-2.jpg",
    ],
    variant: [
      "White Vanilla",
      "Yellow Lemon",
      "Green Mint",
      "Pink Rose",
      "Blue Sky",
      "Purple Lavender",
    ],
    material: ["Palm Wax", "Soy Wax", "Beeswax"],
    dimension: {
      length: 60,
      width: 60,
      height: 60,
    },
    weight: 165,
    description:
      "Unveil a touch of elegance with our Bubble Sphere Candle, a design-centric piece that brings a modern twist to traditional lighting. Available in pure palm wax, soy wax, or beeswax options, this candle's distinctive bubble design is a conversation starter, adding a sculptural element to any decor. The unique arrangement of spheres casts a mesmerizing light, creating a serene ambiance in your sanctuary.",
  },
  // MINI BUBBLE CANDLE DATA
  {
    category: "Scented Bubble Candle",
    slug: "mini-bubble-candle",
    name: "Mini Bubble Candle",
    image: [
      "bubble-2x2-white-1.jpg",
      "bubble-2x2-white-2.jpg",
      "bubble-2x2-yellow-1.jpg",
      "bubble-2x2-yellow-2.jpg",
      "bubble-2x2-green-1.jpg",
      "bubble-2x2-green-2.jpg",
      "bubble-2x2-pink-1.jpg",
      "bubble-2x2-pink-2.jpg",
      "bubble-2x2-blue-1.jpg",
      "bubble-2x2-blue-2.jpg",
      "bubble-2x2-purple-1.jpg",
      "bubble-2x2-purple-2.jpg",
    ],
    variant: [
      "White Vanilla",
      "Yellow Lemon",
      "Green Mint",
      "Pink Rose",
      "Blue Sky",
      "Purple Lavender",
    ],
    material: ["Palm Wax", "Soy Wax", "Beeswax"],
    dimension: {
      length: 40,
      width: 40,
      height: 35,
    },
    weight: 40,
    description:
      "Discover minimalist charm with our Cluster Candle, designed to infuse tranquility into your home. Molded from your choice of pristine palm, soy, or beeswax, this candle features a quartet of interconnected spheres. Its sleek, white design adds a contemporary yet timeless aesthetic to any room, perfect for those serene moments of relaxation.",
  },
  // GLASS CRYSTAL CANDLE DATA
  {
    category: "Glass Candle",
    slug: "glass-crystal-candle",
    name: "Glass Crystal Candle",
    image: ["glass-crystal.jpg"],
    variant: [],
    material: ["Palm Wax", "Soy Wax", "Beeswax"],
    dimension: {
      length: 50,
      width: 50,
      height: 65,
    },
    weight: 175,
    description:
      "Create a captivating glow with our Glass Crystal Candle, a statement piece that fuses the clarity of glass with the vibrant allure of multicolored wax crystals. Each candle is a miniature treasure trove that reflects light beautifully, making it the perfect accent piece for both intimate gatherings and grand celebrations. Light it up to unveil the magic of these sparkling crystals and bathe your room in a warm, inviting atmosphere.",
  },
  // GLASS FLOWERY CANDLE DATA
  {
    category: "Glass Candle",
    slug: "glass-flowery-candle",
    name: "Glass Flowery Candle",
    image: ["glass-flowery.jpg"],
    variant: [],
    material: ["Palm Wax", "Soy Wax", "Beeswax"],
    dimension: {
      length: 50,
      width: 50,
      height: 65,
    },
    weight: 175,
    description:
      "Invite the serenity of a blooming garden into your home with our Glass Flowery Candle. This artfully designed piece features whimsical wax flora embedded within its translucent walls, offering a unique visual treat. When lit, the play of flame against flower creates a delightful dance of shadows and light, bringing a peaceful, natural elegance to your favorite nook or centerpiece arrangement.",
  },
  // ROSE GLASS CANDLE DATA
  {
    category: "Glass Candle",
    slug: "rose-glass-candle",
    name: "Rose Glass Candle",
    image: [
      "rose-white-1.jpg",
      "rose-white-2.jpg",
      "rose-yellow-1.jpg",
      "rose-yellow-2.jpg",
      "rose-green-1.jpg",
      "rose-green-2.jpg",
      "rose-pink-1.jpg",
      "rose-pink-2.jpg",
      "rose-blue-1.jpg",
      "rose-blue-2.jpg",
      "rose-purple-1.jpg",
      "rose-purple-2.jpg",
    ],
    variant: [
      "White Vanilla Rose",
      "Yellow Lemon Rose",
      "Green Mint Rose",
      "Pink Rose Rose",
      "Blue Sky Rose",
      "Purple Lavender Rose",
    ],
    material: ["Palm Wax", "Soy Wax", "Beeswax"],
    dimension: {
      length: 50,
      width: 50,
      height: 65,
    },
    weight: 175,
    description:
      "Our Small Rose Glass Candle is an ode to timeless beauty, featuring a meticulously crafted wax rose at its heart. Available in a variety of hues to match your mood or décor, each candle is a testament to love and craftsmanship. The unscented candle offers an understated yet exquisite touch, perfect for those moments when you seek to envelop your senses in the simple pleasures of life and light.",
  },
  // WOODEN BOWL CANDLE DATA
  {
    category: "Wooden Bowl Candle",
    slug: "wooden-bowl-candle",
    name: "Wooden Bowl Candle",
    image: ["wooden-bowl.jpg"],
    variant: [],
    material: ["Palm Wax", "Soy Wax", "Beeswax"],
    dimension: {
      length: 100,
      width: 100,
      height: 50,
    },
    weight: 175,
    description:
      "Embrace the fusion of natural elegance and minimalist design with our Wooden Bowl Candle. Each candle is cradled in a handcrafted wooden bowl, bringing a touch of organic sophistication to your decor. The unscented, pure wax poured into this durable and rustic vessel offers a serene and clean burn, ideal for setting a tranquil ambiance in any space. This versatile piece serves not only as a source of soft light but also as a timeless addition to your home, blending seamlessly with any style.",
  },
  // CONCRETE CANDLE DATA
  {
    category: "Concrete Candle",
    slug: "concrete-candle",
    name: "Concrete Candle",
    image: ["diamond-concrete-1.jpg", "diamond-concrete-2.jpg"],
    variant: [],
    material: ["Palm Wax", "Soy Wax", "Beeswax"],
    dimension: {
      length: 60,
      width: 60,
      height: 50,
    },
    weight: 105,
    description:
      "Immerse in the understated sophistication of our Concrete Vessel Candle Collection, where industrial chic meets artisanal tranquility. Poured into a variety of geometric concrete holders, each candle is a piece of modern art for your living space. The stark, elegant lines of the concrete are softened by the warm glow of the candle within, creating a perfect harmony of form and function. Whether showcased individually or in a curated group, these candles are a statement of minimalist luxury that effortlessly enhances any decor.",
  },
];

export const listCategory = [
  "Wax Blocks",
  "Scented Bubble Candle",
  "Glass Candle",
  "Wooden Bowl Candle",
  "Concrete Candle",
];

export const listVariant = [
  "White Vanilla",
  "Yellow Lemon",
  "Green Mint",
  "Pink Rose",
  "Blue Sky",
  "Purple Lavender",
];

export const getProductBySlug = (slug) => {
  const product = listProduct.find((item) => item.slug === slug);
  return product || null;
};

export const getFilteredProducts = (category, slug) => {
  const product = listProduct.filter(
    (item) => item.slug !== slug && item.category !== category
  );
  return product || null;
};

export const getOtherVariant = (category, slug) => {
  const product = listProduct.filter(
    (item) => item.slug !== slug && item.category === category
  );
  return product || null;
};

export default listProduct;
