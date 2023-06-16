const listProduct = [
  {
    slug: "Aesthetic-scented-bubble-3x3-white",
    category: "Scented Bubble Candle",
    name: "Aesthetic Scented Bubble 3x3 - White",
    image: ["bubble-3x3-white-1.jpg", "bubble-3x3-white-2.jpg"],
    star: 5,
    variant: "White Vanilla",
    dimension: {
      length: 60,
      width: 60,
      height: 60,
    },
    weight: 165,
    description:
      // "Introducing our mesmerizing Bubble Candle Aromatherapy collection. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Experience the soft luxury scent of Cherry as our captivating glow transforms your space into a haven of relaxation and tranquility. These decorative delights are perfect for home decor, photography props, and filling your space with delightful fragrance. Available in 6X6X5.5 cm dimensions and weighing 135g or 160g, our meticulously crafted candles offer elegance and sophistication. Trust CandleCraft for premium quality and enchanting experiences.",
      "Introducing our mesmerizing Bubble Candle Aromatherapy collection. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Immerse yourself in a sensory journey with our aesthetic scented bubble. As you unwind, delicate notes of enchanting fragrance fill the air, creating a captivating atmosphere. The elegantly designed bubble adds a touch of visual allure to any space, with its charming form and exquisite details. Let the soothing aroma transport you to a world of tranquility, as the gentle bubbles bring a sense of relaxation and serenity. Elevate your surroundings with this delightful sensory experience, where aesthetics and aromatics converge to create a truly enchanting ambiance.",
  },
  {
    slug: "Aesthetic-scented-bubble-3x3-yellow",
    category: "Scented Bubble Candle",
    name: "Aesthetic Scented Bubble 3x3 - Yellow",
    image: ["bubble-3x3-yellow-1.jpg", "bubble-3x3-yellow-2.jpg"],
    star: 5,
    variant: "Yellow Lemon",
    dimension: {
      length: 60,
      width: 60,
      height: 60,
    },
    weight: 165,
    description:
      "Introducing our mesmerizing Bubble Candle Aromatherapy collection. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Immerse yourself in a sensory journey with our aesthetic scented bubble. As you unwind, delicate notes of enchanting fragrance fill the air, creating a captivating atmosphere. The elegantly designed bubble adds a touch of visual allure to any space, with its charming form and exquisite details. Let the soothing aroma transport you to a world of tranquility, as the gentle bubbles bring a sense of relaxation and serenity. Elevate your surroundings with this delightful sensory experience, where aesthetics and aromatics converge to create a truly enchanting ambiance.",
  },
  {
    slug: "Aesthetic-scented-bubble-3x3-green",
    category: "Scented Bubble Candle",
    name: "Aesthetic Scented Bubble 3x3 - Green",
    image: ["bubble-3x3-green-1.jpg", "bubble-3x3-green-2.jpg"],
    star: 5,
    variant: "Green Mint",
    dimension: {
      length: 60,
      width: 60,
      height: 60,
    },
    weight: 165,
    description:
      "Introducing our mesmerizing Bubble Candle Aromatherapy collection. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Immerse yourself in a sensory journey with our aesthetic scented bubble. As you unwind, delicate notes of enchanting fragrance fill the air, creating a captivating atmosphere. The elegantly designed bubble adds a touch of visual allure to any space, with its charming form and exquisite details. Let the soothing aroma transport you to a world of tranquility, as the gentle bubbles bring a sense of relaxation and serenity. Elevate your surroundings with this delightful sensory experience, where aesthetics and aromatics converge to create a truly enchanting ambiance.",
  },
  {
    slug: "Aesthetic-scented-bubble-3x3-pink",
    category: "Scented Bubble Candle",
    name: "Aesthetic Scented Bubble 3x3 - Pink",
    image: ["bubble-3x3-pink-1.jpg", "bubble-3x3-pink-2.jpg"],
    star: 5,
    variant: "Pink Rose",
    dimension: {
      length: 60,
      width: 60,
      height: 60,
    },
    weight: 165,
    description:
      "Introducing our mesmerizing Bubble Candle Aromatherapy collection. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Immerse yourself in a sensory journey with our aesthetic scented bubble. As you unwind, delicate notes of enchanting fragrance fill the air, creating a captivating atmosphere. The elegantly designed bubble adds a touch of visual allure to any space, with its charming form and exquisite details. Let the soothing aroma transport you to a world of tranquility, as the gentle bubbles bring a sense of relaxation and serenity. Elevate your surroundings with this delightful sensory experience, where aesthetics and aromatics converge to create a truly enchanting ambiance.",
  },
  {
    slug: "Aesthetic-scented-bubble-3x3-blue",
    category: "Scented Bubble Candle",
    name: "Aesthetic Scented Bubble 3x3 - Blue",
    image: ["bubble-3x3-blue-1.jpg", "bubble-3x3-blue-2.jpg"],
    star: 5,
    variant: "Blue Sky",
    dimension: {
      length: 60,
      width: 60,
      height: 60,
    },
    weight: 165,
    description:
      "Introducing our mesmerizing Bubble Candle Aromatherapy collection. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Immerse yourself in a sensory journey with our aesthetic scented bubble. As you unwind, delicate notes of enchanting fragrance fill the air, creating a captivating atmosphere. The elegantly designed bubble adds a touch of visual allure to any space, with its charming form and exquisite details. Let the soothing aroma transport you to a world of tranquility, as the gentle bubbles bring a sense of relaxation and serenity. Elevate your surroundings with this delightful sensory experience, where aesthetics and aromatics converge to create a truly enchanting ambiance.",
  },
  {
    slug: "Aesthetic-scented-bubble-3x3-purple",
    category: "Scented Bubble Candle",
    name: "Aesthetic Scented Bubble 3x3 - Purple",
    image: ["bubble-3x3-purple-1.jpg", "bubble-3x3-purple-2.jpg"],
    star: 5,
    variant: "Purple Lavender",
    dimension: {
      length: 60,
      width: 60,
      height: 60,
    },
    weight: 165,
    description:
      "Introducing our mesmerizing Bubble Candle Aromatherapy collection. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Immerse yourself in a sensory journey with our aesthetic scented bubble. As you unwind, delicate notes of enchanting fragrance fill the air, creating a captivating atmosphere. The elegantly designed bubble adds a touch of visual allure to any space, with its charming form and exquisite details. Let the soothing aroma transport you to a world of tranquility, as the gentle bubbles bring a sense of relaxation and serenity. Elevate your surroundings with this delightful sensory experience, where aesthetics and aromatics converge to create a truly enchanting ambiance.",
  },
  {
    slug: "Aesthetic-scented-bubble-2x2-white",
    category: "Scented Bubble Candle",
    name: "Aesthetic Scented Bubble 2x2 - White",
    image: ["placeholder-1.jpg", "placeholder-2.jpg"],
    star: 5,
    variant: "White Vanilla",
    dimension: {
      length: 40,
      width: 40,
      height: 35,
    },
    weight: 0,
    description:
      // "Introducing our mesmerizing Bubble Candle Aromatherapy collection. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Experience the soft luxury scent of Cherry as our captivating glow transforms your space into a haven of relaxation and tranquility. These decorative delights are perfect for home decor, photography props, and filling your space with delightful fragrance. Available in 6X6X5.5 cm dimensions and weighing 135g or 140g, our meticulously crafted candles offer elegance and sophistication. Trust CandleCraft for premium quality and enchanting experiences.",
      "Introducing our mesmerizing Bubble Candle Aromatherapy collection. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Immerse yourself in a sensory journey with our aesthetic scented bubble. As you unwind, delicate notes of enchanting fragrance fill the air, creating a captivating atmosphere. The elegantly designed bubble adds a touch of visual allure to any space, with its charming form and exquisite details. Let the soothing aroma transport you to a world of tranquility, as the gentle bubbles bring a sense of relaxation and serenity. Elevate your surroundings with this delightful sensory experience, where aesthetics and aromatics converge to create a truly enchanting ambiance.",
  },
  {
    slug: "Aesthetic-scented-bubble-2x2-yellow",
    category: "Scented Bubble Candle",
    name: "Aesthetic Scented Bubble 2x2 - Yellow",
    image: ["placeholder-1.jpg", "placeholder-2.jpg"],
    star: 5,
    variant: "Yellow Lemon",
    dimension: {
      length: 40,
      width: 40,
      height: 35,
    },
    weight: 0,
    description:
      "Introducing our mesmerizing Bubble Candle Aromatherapy collection. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Immerse yourself in a sensory journey with our aesthetic scented bubble. As you unwind, delicate notes of enchanting fragrance fill the air, creating a captivating atmosphere. The elegantly designed bubble adds a touch of visual allure to any space, with its charming form and exquisite details. Let the soothing aroma transport you to a world of tranquility, as the gentle bubbles bring a sense of relaxation and serenity. Elevate your surroundings with this delightful sensory experience, where aesthetics and aromatics converge to create a truly enchanting ambiance.",
  },
  {
    slug: "Aesthetic-scented-bubble-2x2-green",
    category: "Scented Bubble Candle",
    name: "Aesthetic Scented Bubble 2x2 - Green",
    image: ["placeholder-1.jpg", "placeholder-2.jpg"],
    star: 5,
    variant: "Green Mint",
    dimension: {
      length: 40,
      width: 40,
      height: 35,
    },
    weight: 0,
    description:
      "Introducing our mesmerizing Bubble Candle Aromatherapy collection. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Immerse yourself in a sensory journey with our aesthetic scented bubble. As you unwind, delicate notes of enchanting fragrance fill the air, creating a captivating atmosphere. The elegantly designed bubble adds a touch of visual allure to any space, with its charming form and exquisite details. Let the soothing aroma transport you to a world of tranquility, as the gentle bubbles bring a sense of relaxation and serenity. Elevate your surroundings with this delightful sensory experience, where aesthetics and aromatics converge to create a truly enchanting ambiance.",
  },
  {
    slug: "Aesthetic-scented-bubble-2x2-pink",
    category: "Scented Bubble Candle",
    name: "Aesthetic Scented Bubble 2x2 - Pink",
    image: ["placeholder-1.jpg", "placeholder-2.jpg"],
    star: 5,
    variant: "Pink Rose",
    dimension: {
      length: 40,
      width: 40,
      height: 35,
    },
    weight: 0,
    description:
      "Introducing our mesmerizing Bubble Candle Aromatherapy collection. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Immerse yourself in a sensory journey with our aesthetic scented bubble. As you unwind, delicate notes of enchanting fragrance fill the air, creating a captivating atmosphere. The elegantly designed bubble adds a touch of visual allure to any space, with its charming form and exquisite details. Let the soothing aroma transport you to a world of tranquility, as the gentle bubbles bring a sense of relaxation and serenity. Elevate your surroundings with this delightful sensory experience, where aesthetics and aromatics converge to create a truly enchanting ambiance.",
  },
  {
    slug: "Aesthetic-scented-bubble-2x2-blue",
    category: "Scented Bubble Candle",
    name: "Aesthetic Scented Bubble 2x2 - Blue",
    image: ["placeholder-1.jpg", "placeholder-2.jpg"],
    star: 5,
    variant: "Blue Sky",
    dimension: {
      length: 40,
      width: 40,
      height: 35,
    },
    weight: 0,
    description:
      "Introducing our mesmerizing Bubble Candle Aromatherapy collection. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Immerse yourself in a sensory journey with our aesthetic scented bubble. As you unwind, delicate notes of enchanting fragrance fill the air, creating a captivating atmosphere. The elegantly designed bubble adds a touch of visual allure to any space, with its charming form and exquisite details. Let the soothing aroma transport you to a world of tranquility, as the gentle bubbles bring a sense of relaxation and serenity. Elevate your surroundings with this delightful sensory experience, where aesthetics and aromatics converge to create a truly enchanting ambiance.",
  },
  {
    slug: "Aesthetic-scented-bubble-2x2-purple",
    category: "Scented Bubble Candle",
    name: "Aesthetic Scented Bubble 2x2 - Purple",
    image: ["placeholder-1.jpg", "placeholder-2.jpg"],
    star: 5,
    variant: "Purple Lavender",
    dimension: {
      length: 40,
      width: 40,
      height: 35,
    },
    weight: 0,
    description:
      "Introducing our mesmerizing Bubble Candle Aromatherapy collection. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Immerse yourself in a sensory journey with our aesthetic scented bubble. As you unwind, delicate notes of enchanting fragrance fill the air, creating a captivating atmosphere. The elegantly designed bubble adds a touch of visual allure to any space, with its charming form and exquisite details. Let the soothing aroma transport you to a world of tranquility, as the gentle bubbles bring a sense of relaxation and serenity. Elevate your surroundings with this delightful sensory experience, where aesthetics and aromatics converge to create a truly enchanting ambiance.",
  },
  {
    slug: "small-scented-sachet-white",
    category: "Scented Small Sachet Candle",
    name: "Small Scented Sachet - White",
    image: ["small-sachet-white-1.jpg"],
    star: 5,
    variant: "White Vanilla",
    dimension: {
      length: 50,
      width: 30,
      height: 5,
    },
    weight: 10,
    description:
      "Introducing our small scented sachet, a pocket-sized sensory treasure. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Imbued with a captivating fragrance, this little sachet brings a burst of delightful aroma to any space. Tuck it into your drawer, hang it in your closet, or place it in your car for a touch of scented elegance. With its compact size and stylish design, it effortlessly infuses your surroundings with a refreshing and inviting atmosphere. Embrace the simplicity of this scented sachet and let its enchanting scent transform your day, wherever you go.",
  },
  {
    slug: "small-scented-sachet-yellow",
    category: "Scented Small Sachet Candle",
    name: "Small Scented Sachet - Yellow",
    image: ["small-sachet-yellow-1.jpg"],
    star: 5,
    variant: "Yellow Lemon",
    dimension: {
      length: 50,
      width: 30,
      height: 5,
    },
    weight: 10,
    description:
      "Introducing our small scented sachet, a pocket-sized sensory treasure. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Imbued with a captivating fragrance, this little sachet brings a burst of delightful aroma to any space. Tuck it into your drawer, hang it in your closet, or place it in your car for a touch of scented elegance. With its compact size and stylish design, it effortlessly infuses your surroundings with a refreshing and inviting atmosphere. Embrace the simplicity of this scented sachet and let its enchanting scent transform your day, wherever you go.",
  },
  {
    slug: "small-scented-sachet-green",
    category: "Scented Small Sachet Candle",
    name: "Small Scented Sachet - Green",
    image: ["small-sachet-green-1.jpg"],
    star: 5,
    variant: "Green Mint",
    dimension: {
      length: 50,
      width: 30,
      height: 5,
    },
    weight: 10,
    description:
      "Introducing our small scented sachet, a pocket-sized sensory treasure. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Imbued with a captivating fragrance, this little sachet brings a burst of delightful aroma to any space. Tuck it into your drawer, hang it in your closet, or place it in your car for a touch of scented elegance. With its compact size and stylish design, it effortlessly infuses your surroundings with a refreshing and inviting atmosphere. Embrace the simplicity of this scented sachet and let its enchanting scent transform your day, wherever you go.",
  },
  {
    slug: "small-scented-sachet-pink",
    category: "Scented Small Sachet Candle",
    name: "Small Scented Sachet - Pink",
    image: ["small-sachet-pink-1.jpg"],
    star: 5,
    variant: "Pink Rose",
    dimension: {
      length: 50,
      width: 30,
      height: 5,
    },
    weight: 10,
    description:
      "Introducing our small scented sachet, a pocket-sized sensory treasure. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Imbued with a captivating fragrance, this little sachet brings a burst of delightful aroma to any space. Tuck it into your drawer, hang it in your closet, or place it in your car for a touch of scented elegance. With its compact size and stylish design, it effortlessly infuses your surroundings with a refreshing and inviting atmosphere. Embrace the simplicity of this scented sachet and let its enchanting scent transform your day, wherever you go.",
  },
  {
    slug: "small-scented-sachet-blue",
    category: "Scented Small Sachet Candle",
    name: "Small Scented Sachet - Blue",
    image: ["small-sachet-blue-1.jpg"],
    star: 5,
    variant: "Blue Sky",
    dimension: {
      length: 50,
      width: 30,
      height: 5,
    },
    weight: 10,
    description:
      "Introducing our small scented sachet, a pocket-sized sensory treasure. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Imbued with a captivating fragrance, this little sachet brings a burst of delightful aroma to any space. Tuck it into your drawer, hang it in your closet, or place it in your car for a touch of scented elegance. With its compact size and stylish design, it effortlessly infuses your surroundings with a refreshing and inviting atmosphere. Embrace the simplicity of this scented sachet and let its enchanting scent transform your day, wherever you go.",
  },
  {
    slug: "small-scented-sachet-purple",
    category: "Scented Small Sachet Candle",
    name: "Small Scented Sachet - Purple",
    image: ["small-sachet-purple-1.jpg"],
    star: 5,
    variant: "Purple Lavender",
    dimension: {
      length: 50,
      width: 30,
      height: 5,
    },
    weight: 10,
    description:
      "Introducing our small scented sachet, a pocket-sized sensory treasure. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Imbued with a captivating fragrance, this little sachet brings a burst of delightful aroma to any space. Tuck it into your drawer, hang it in your closet, or place it in your car for a touch of scented elegance. With its compact size and stylish design, it effortlessly infuses your surroundings with a refreshing and inviting atmosphere. Embrace the simplicity of this scented sachet and let its enchanting scent transform your day, wherever you go.",
  },
  {
    slug: "small-round-scented-sachet-white",
    category: "Scented Small Sachet Candle",
    name: "Small Round Scented Sachet - White",
    image: ["small-round-sachet-white-1.jpg"],
    star: 5,
    variant: "White Vanilla",
    dimension: {
      length: 50,
      width: 50,
      height: 5,
    },
    weight: 12,
    description:
      "Introducing our small round scented sachet, a delightful burst of fragrance in a compact package. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This charming sachet effortlessly infuses your space with a captivating aroma. With its perfectly round shape and exquisite design, it adds a touch of elegance to any room or enclosed space. Simply place it in your drawer, hang it in your closet, or tuck it in your suitcase to experience a burst of enchanting scent wherever you go. Let the inviting fragrance of our round scented sachet create an atmosphere of relaxation and joy, transforming any space into a haven of olfactory bliss.",
  },
  {
    slug: "small-round-scented-sachet-yellow",
    category: "Scented Small Sachet Candle",
    name: "Small Round Scented Sachet - Yellow",
    image: ["small-round-sachet-yellow-1.jpg"],
    star: 5,
    variant: "Yellow Lemon",
    dimension: {
      length: 50,
      width: 50,
      height: 5,
    },
    weight: 12,
    description:
      "Introducing our small round scented sachet, a delightful burst of fragrance in a compact package. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This charming sachet effortlessly infuses your space with a captivating aroma. With its perfectly round shape and exquisite design, it adds a touch of elegance to any room or enclosed space. Simply place it in your drawer, hang it in your closet, or tuck it in your suitcase to experience a burst of enchanting scent wherever you go. Let the inviting fragrance of our round scented sachet create an atmosphere of relaxation and joy, transforming any space into a haven of olfactory bliss.",
  },
  {
    slug: "small-round-scented-sachet-green",
    category: "Scented Small Sachet Candle",
    name: "Small Round Scented Sachet - Green",
    image: ["small-round-sachet-green-1.jpg"],
    star: 5,
    variant: "Green Mint",
    dimension: {
      length: 50,
      width: 50,
      height: 5,
    },
    weight: 12,
    description:
      "Introducing our small round scented sachet, a delightful burst of fragrance in a compact package. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This charming sachet effortlessly infuses your space with a captivating aroma. With its perfectly round shape and exquisite design, it adds a touch of elegance to any room or enclosed space. Simply place it in your drawer, hang it in your closet, or tuck it in your suitcase to experience a burst of enchanting scent wherever you go. Let the inviting fragrance of our round scented sachet create an atmosphere of relaxation and joy, transforming any space into a haven of olfactory bliss.",
  },
  {
    slug: "small-round-scented-sachet-pink",
    category: "Scented Small Sachet Candle",
    name: "Small Round Scented Sachet - Pink",
    image: ["small-round-sachet-pink-1.jpg"],
    star: 5,
    variant: "Pink Rose",
    dimension: {
      length: 50,
      width: 50,
      height: 5,
    },
    weight: 12,
    description:
      "Introducing our small round scented sachet, a delightful burst of fragrance in a compact package. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This charming sachet effortlessly infuses your space with a captivating aroma. With its perfectly round shape and exquisite design, it adds a touch of elegance to any room or enclosed space. Simply place it in your drawer, hang it in your closet, or tuck it in your suitcase to experience a burst of enchanting scent wherever you go. Let the inviting fragrance of our round scented sachet create an atmosphere of relaxation and joy, transforming any space into a haven of olfactory bliss.",
  },
  {
    slug: "small-round-scented-sachet-blue",
    category: "Scented Small Sachet Candle",
    name: "Small Round Scented Sachet - Blue",
    image: ["small-round-sachet-blue-1.jpg"],
    star: 5,
    variant: "Blue Sky",
    dimension: {
      length: 50,
      width: 50,
      height: 5,
    },
    weight: 12,
    description:
      "Introducing our small round scented sachet, a delightful burst of fragrance in a compact package. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This charming sachet effortlessly infuses your space with a captivating aroma. With its perfectly round shape and exquisite design, it adds a touch of elegance to any room or enclosed space. Simply place it in your drawer, hang it in your closet, or tuck it in your suitcase to experience a burst of enchanting scent wherever you go. Let the inviting fragrance of our round scented sachet create an atmosphere of relaxation and joy, transforming any space into a haven of olfactory bliss.",
  },
  {
    slug: "small-round-scented-sachet-purple",
    category: "Scented Small Sachet Candle",
    name: "Small Round Scented Sachet - Purple",
    image: ["small-round-sachet-purple-1.jpg"],
    star: 5,
    variant: "Purple Lavender",
    dimension: {
      length: 50,
      width: 50,
      height: 5,
    },
    weight: 12,
    description:
      "Introducing our small round scented sachet, a delightful burst of fragrance in a compact package. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This charming sachet effortlessly infuses your space with a captivating aroma. With its perfectly round shape and exquisite design, it adds a touch of elegance to any room or enclosed space. Simply place it in your drawer, hang it in your closet, or tuck it in your suitcase to experience a burst of enchanting scent wherever you go. Let the inviting fragrance of our round scented sachet create an atmosphere of relaxation and joy, transforming any space into a haven of olfactory bliss.",
  },
  {
    slug: "bar-scented-sachet-white",
    category: "Scented Sachet Candle",
    name: "Bar Scented Sachet - White",
    image: ["sachet-bar-white-1.jpg"],
    star: 5,
    variant: "White Vanilla",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 50,
    description:
      "Introducing our bar scented sachet, a sleek and versatile fragrance companion. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This stylish sachet is designed in a convenient bar shape, perfect for placing in your wardrobe, drawers, or even on a hanger. Infused with a captivating scent, it imparts a fresh and inviting ambiance to your surroundings. Let the bar scented sachet unleash its aromatic charm, enveloping your space with a delightful fragrance that lingers long after it's been placed. Elevate your everyday experiences with this elegant and practical sachet, making every moment a scented delight.",
  },
  {
    slug: "bar-scented-sachet-yellow",
    category: "Scented Sachet Candle",
    name: "Bar Scented Sachet - Yellow",
    image: ["sachet-bar-yellow-1.jpg"],
    star: 5,
    variant: "Yellow Lemon",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 50,
    description:
      "Introducing our bar scented sachet, a sleek and versatile fragrance companion. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This stylish sachet is designed in a convenient bar shape, perfect for placing in your wardrobe, drawers, or even on a hanger. Infused with a captivating scent, it imparts a fresh and inviting ambiance to your surroundings. Let the bar scented sachet unleash its aromatic charm, enveloping your space with a delightful fragrance that lingers long after it's been placed. Elevate your everyday experiences with this elegant and practical sachet, making every moment a scented delight.",
  },
  {
    slug: "bar-scented-sachet-green",
    category: "Scented Sachet Candle",
    name: "Bar Scented Sachet - Green",
    image: ["sachet-bar-green-1.jpg"],
    star: 5,
    variant: "Green Mint",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 50,
    description:
      "Introducing our bar scented sachet, a sleek and versatile fragrance companion. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This stylish sachet is designed in a convenient bar shape, perfect for placing in your wardrobe, drawers, or even on a hanger. Infused with a captivating scent, it imparts a fresh and inviting ambiance to your surroundings. Let the bar scented sachet unleash its aromatic charm, enveloping your space with a delightful fragrance that lingers long after it's been placed. Elevate your everyday experiences with this elegant and practical sachet, making every moment a scented delight.",
  },
  {
    slug: "bar-scented-sachet-pink",
    category: "Scented Sachet Candle",
    name: "Bar Scented Sachet - Pink",
    image: ["sachet-bar-pink-1.jpg"],
    star: 5,
    variant: "Pink Rose",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 50,
    description:
      "Introducing our bar scented sachet, a sleek and versatile fragrance companion. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This stylish sachet is designed in a convenient bar shape, perfect for placing in your wardrobe, drawers, or even on a hanger. Infused with a captivating scent, it imparts a fresh and inviting ambiance to your surroundings. Let the bar scented sachet unleash its aromatic charm, enveloping your space with a delightful fragrance that lingers long after it's been placed. Elevate your everyday experiences with this elegant and practical sachet, making every moment a scented delight.",
  },
  {
    slug: "bar-scented-sachet-blue",
    category: "Scented Sachet Candle",
    name: "Bar Scented Sachet - Blue",
    image: ["sachet-bar-blue-1.jpg"],
    star: 5,
    variant: "Blue Sky",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 50,
    description:
      "Introducing our bar scented sachet, a sleek and versatile fragrance companion. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This stylish sachet is designed in a convenient bar shape, perfect for placing in your wardrobe, drawers, or even on a hanger. Infused with a captivating scent, it imparts a fresh and inviting ambiance to your surroundings. Let the bar scented sachet unleash its aromatic charm, enveloping your space with a delightful fragrance that lingers long after it's been placed. Elevate your everyday experiences with this elegant and practical sachet, making every moment a scented delight.",
  },
  {
    slug: "bar-scented-sachet-purple",
    category: "Scented Sachet Candle",
    name: "Bar Scented Sachet - Purple",
    image: ["sachet-bar-purple-1.jpg"],
    star: 5,
    variant: "Purple Lavender",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 50,
    description:
      "Introducing our bar scented sachet, a sleek and versatile fragrance companion. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This stylish sachet is designed in a convenient bar shape, perfect for placing in your wardrobe, drawers, or even on a hanger. Infused with a captivating scent, it imparts a fresh and inviting ambiance to your surroundings. Let the bar scented sachet unleash its aromatic charm, enveloping your space with a delightful fragrance that lingers long after it's been placed. Elevate your everyday experiences with this elegant and practical sachet, making every moment a scented delight.",
  },
  {
    slug: "hexa-scented-sachet-white",
    category: "Scented Sachet Candle",
    name: "Hexa Scented Sachet - White",
    image: ["sachet-hexa-white-1.jpg"],
    star: 5,
    variant: "White Vanilla",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 40,
    description:
      "Introducing our hexagon scented sachet, a captivating fusion of fragrance and design. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This uniquely shaped sachet adds a touch of modern elegance to any space. With its six sides of scented bliss, it releases a captivating aroma that fills the air with enchantment. Whether placed in your drawers, hung in your closet, or used as a decorative accent, this hexagon sachet emanates a delightful scent that lingers and uplifts your surroundings. Indulge in the beauty of its design and let the enticing fragrance transport you to a realm of sensory delight.",
  },
  {
    slug: "hexa-scented-sachet-Yellow",
    category: "Scented Sachet Candle",
    name: "Hexa Scented Sachet - Yellow",
    image: ["sachet-hexa-yellow-1.jpg"],
    star: 5,
    variant: "Yellow Lemon",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 40,
    description:
      "Introducing our hexagon scented sachet, a captivating fusion of fragrance and design. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This uniquely shaped sachet adds a touch of modern elegance to any space. With its six sides of scented bliss, it releases a captivating aroma that fills the air with enchantment. Whether placed in your drawers, hung in your closet, or used as a decorative accent, this hexagon sachet emanates a delightful scent that lingers and uplifts your surroundings. Indulge in the beauty of its design and let the enticing fragrance transport you to a realm of sensory delight.",
  },
  {
    slug: "hexa-scented-sachet-green",
    category: "Scented Sachet Candle",
    name: "Hexa Scented Sachet - Green",
    image: ["sachet-hexa-green-1.jpg"],
    star: 5,
    variant: "Green Mint",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 40,
    description:
      "Introducing our hexagon scented sachet, a captivating fusion of fragrance and design. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This uniquely shaped sachet adds a touch of modern elegance to any space. With its six sides of scented bliss, it releases a captivating aroma that fills the air with enchantment. Whether placed in your drawers, hung in your closet, or used as a decorative accent, this hexagon sachet emanates a delightful scent that lingers and uplifts your surroundings. Indulge in the beauty of its design and let the enticing fragrance transport you to a realm of sensory delight.",
  },
  {
    slug: "hexa-scented-sachet-pink",
    category: "Scented Sachet Candle",
    name: "Hexa Scented Sachet - Pink",
    image: ["sachet-hexa-pink-1.jpg"],
    star: 5,
    variant: "Pink Rose",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 40,
    description:
      "Introducing our hexagon scented sachet, a captivating fusion of fragrance and design. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This uniquely shaped sachet adds a touch of modern elegance to any space. With its six sides of scented bliss, it releases a captivating aroma that fills the air with enchantment. Whether placed in your drawers, hung in your closet, or used as a decorative accent, this hexagon sachet emanates a delightful scent that lingers and uplifts your surroundings. Indulge in the beauty of its design and let the enticing fragrance transport you to a realm of sensory delight.",
  },
  {
    slug: "hexa-scented-sachet-blue",
    category: "Scented Sachet Candle",
    name: "Hexa Scented Sachet - Blue",
    image: ["sachet-hexa-blue-1.jpg"],
    star: 5,
    variant: "Blue Sky",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 40,
    description:
      "Introducing our hexagon scented sachet, a captivating fusion of fragrance and design. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This uniquely shaped sachet adds a touch of modern elegance to any space. With its six sides of scented bliss, it releases a captivating aroma that fills the air with enchantment. Whether placed in your drawers, hung in your closet, or used as a decorative accent, this hexagon sachet emanates a delightful scent that lingers and uplifts your surroundings. Indulge in the beauty of its design and let the enticing fragrance transport you to a realm of sensory delight.",
  },
  {
    slug: "hexa-scented-sachet-purple",
    category: "Scented Sachet Candle",
    name: "Hexa Scented Sachet - Purple",
    image: ["sachet-hexa-purple-1.jpg"],
    star: 5,
    variant: "Purple Lavender",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 40,
    description:
      "Introducing our hexagon scented sachet, a captivating fusion of fragrance and design. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This uniquely shaped sachet adds a touch of modern elegance to any space. With its six sides of scented bliss, it releases a captivating aroma that fills the air with enchantment. Whether placed in your drawers, hung in your closet, or used as a decorative accent, this hexagon sachet emanates a delightful scent that lingers and uplifts your surroundings. Indulge in the beauty of its design and let the enticing fragrance transport you to a realm of sensory delight.",
  },
  {
    slug: "oval-scented-sachet-white",
    category: "Scented Sachet Candle",
    name: "Oval Scented Sachet - White",
    image: ["sachet-oval-white-1.jpg"],
    star: 5,
    variant: "White Vanilla",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 40,
    description:
      "Introducing our oval scented sachet, a harmonious blend of fragrance and elegance. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This gracefully shaped sachet effortlessly enhances any space with its captivating aroma. Designed to be versatile, it can be placed in drawers, hung in closets, or displayed as a decorative accent. The soothing scent emanating from the oval sachet fills the air, creating an atmosphere of serenity and relaxation. Let its gentle fragrance transport you to a realm of tranquility as it infuses your surroundings with an irresistible allure. Embrace the oval sachet's delicate charm and indulge in the sensory pleasure it brings to your everyday life.",
  },
  {
    slug: "oval-scented-sachet-yellow",
    category: "Scented Sachet Candle",
    name: "Oval Scented Sachet - Yellow",
    image: ["sachet-oval-yellow-1.jpg"],
    star: 5,
    variant: "Yellow Lemon",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 40,
    description:
      "Introducing our oval scented sachet, a harmonious blend of fragrance and elegance. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This gracefully shaped sachet effortlessly enhances any space with its captivating aroma. Designed to be versatile, it can be placed in drawers, hung in closets, or displayed as a decorative accent. The soothing scent emanating from the oval sachet fills the air, creating an atmosphere of serenity and relaxation. Let its gentle fragrance transport you to a realm of tranquility as it infuses your surroundings with an irresistible allure. Embrace the oval sachet's delicate charm and indulge in the sensory pleasure it brings to your everyday life.",
  },
  {
    slug: "oval-scented-sachet-green",
    category: "Scented Sachet Candle",
    name: "Oval Scented Sachet - Green",
    image: ["sachet-oval-green-1.jpg"],
    star: 5,
    variant: "Green Mint",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 40,
    description:
      "Introducing our oval scented sachet, a harmonious blend of fragrance and elegance. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This gracefully shaped sachet effortlessly enhances any space with its captivating aroma. Designed to be versatile, it can be placed in drawers, hung in closets, or displayed as a decorative accent. The soothing scent emanating from the oval sachet fills the air, creating an atmosphere of serenity and relaxation. Let its gentle fragrance transport you to a realm of tranquility as it infuses your surroundings with an irresistible allure. Embrace the oval sachet's delicate charm and indulge in the sensory pleasure it brings to your everyday life.",
  },
  {
    slug: "oval-scented-sachet-pink",
    category: "Scented Sachet Candle",
    name: "Oval Scented Sachet - Pink",
    image: ["sachet-oval-pink-1.jpg"],
    star: 5,
    variant: "Pink Rose",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 40,
    description:
      "Introducing our oval scented sachet, a harmonious blend of fragrance and elegance. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This gracefully shaped sachet effortlessly enhances any space with its captivating aroma. Designed to be versatile, it can be placed in drawers, hung in closets, or displayed as a decorative accent. The soothing scent emanating from the oval sachet fills the air, creating an atmosphere of serenity and relaxation. Let its gentle fragrance transport you to a realm of tranquility as it infuses your surroundings with an irresistible allure. Embrace the oval sachet's delicate charm and indulge in the sensory pleasure it brings to your everyday life.",
  },
  {
    slug: "oval-scented-sachet-blue",
    category: "Scented Sachet Candle",
    name: "Oval Scented Sachet - Blue",
    image: ["sachet-oval-blue-1.jpg"],
    star: 5,
    variant: "Blue Sky",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 40,
    description:
      "Introducing our oval scented sachet, a harmonious blend of fragrance and elegance. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This gracefully shaped sachet effortlessly enhances any space with its captivating aroma. Designed to be versatile, it can be placed in drawers, hung in closets, or displayed as a decorative accent. The soothing scent emanating from the oval sachet fills the air, creating an atmosphere of serenity and relaxation. Let its gentle fragrance transport you to a realm of tranquility as it infuses your surroundings with an irresistible allure. Embrace the oval sachet's delicate charm and indulge in the sensory pleasure it brings to your everyday life.",
  },
  {
    slug: "oval-scented-sachet-purple",
    category: "Scented Sachet Candle",
    name: "Oval Scented Sachet - Purple",
    image: ["sachet-oval-purple-1.jpg"],
    star: 5,
    variant: "Purple Lavender",
    dimension: {
      length: 95,
      width: 60,
      height: 10,
    },
    weight: 40,
    description:
      "Introducing our oval scented sachet, a harmonious blend of fragrance and elegance. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This gracefully shaped sachet effortlessly enhances any space with its captivating aroma. Designed to be versatile, it can be placed in drawers, hung in closets, or displayed as a decorative accent. The soothing scent emanating from the oval sachet fills the air, creating an atmosphere of serenity and relaxation. Let its gentle fragrance transport you to a realm of tranquility as it infuses your surroundings with an irresistible allure. Embrace the oval sachet's delicate charm and indulge in the sensory pleasure it brings to your everyday life.",
  },
  {
    slug: "round-scented-sachet-white",
    category: "Scented Sachet Candle",
    name: "Round Scented Sachet - White",
    image: ["sachet-round-white-1.jpg"],
    star: 5,
    variant: "White Vanilla",
    dimension: {
      length: 80,
      width: 80,
      height: 10,
    },
    weight: 20,
    description:
      "Introducing our round scented sachet, a delightful burst of fragrance in a compact package. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This charming sachet effortlessly infuses your space with a captivating aroma. With its perfectly round shape and exquisite design, it adds a touch of elegance to any room or enclosed space. Simply place it in your drawer, hang it in your closet, or tuck it in your suitcase to experience a burst of enchanting scent wherever you go. Let the inviting fragrance of our round scented sachet create an atmosphere of relaxation and joy, transforming any space into a haven of olfactory bliss.",
  },
  {
    slug: "round-scented-sachet-yellow",
    category: "Scented Sachet Candle",
    name: "Round Scented Sachet - Yellow",
    image: ["sachet-round-yellow-1.jpg"],
    star: 5,
    variant: "Yellow Lemon",
    dimension: {
      length: 80,
      width: 80,
      height: 10,
    },
    weight: 20,
    description:
      "Introducing our round scented sachet, a delightful burst of fragrance in a compact package. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This charming sachet effortlessly infuses your space with a captivating aroma. With its perfectly round shape and exquisite design, it adds a touch of elegance to any room or enclosed space. Simply place it in your drawer, hang it in your closet, or tuck it in your suitcase to experience a burst of enchanting scent wherever you go. Let the inviting fragrance of our round scented sachet create an atmosphere of relaxation and joy, transforming any space into a haven of olfactory bliss.",
  },
  {
    slug: "round-scented-sachet-green",
    category: "Scented Sachet Candle",
    name: "Round Scented Sachet - Green",
    image: ["sachet-round-green-1.jpg"],
    star: 5,
    variant: "Green Mint",
    dimension: {
      length: 80,
      width: 80,
      height: 10,
    },
    weight: 20,
    description:
      "Introducing our round scented sachet, a delightful burst of fragrance in a compact package. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This charming sachet effortlessly infuses your space with a captivating aroma. With its perfectly round shape and exquisite design, it adds a touch of elegance to any room or enclosed space. Simply place it in your drawer, hang it in your closet, or tuck it in your suitcase to experience a burst of enchanting scent wherever you go. Let the inviting fragrance of our round scented sachet create an atmosphere of relaxation and joy, transforming any space into a haven of olfactory bliss.",
  },
  {
    slug: "round-scented-sachet-pink",
    category: "Scented Sachet Candle",
    name: "Round Scented Sachet - Pink",
    image: ["sachet-round-pink-1.jpg"],
    star: 5,
    variant: "Pink Rose",
    dimension: {
      length: 80,
      width: 80,
      height: 10,
    },
    weight: 20,
    description:
      "Introducing our round scented sachet, a delightful burst of fragrance in a compact package. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This charming sachet effortlessly infuses your space with a captivating aroma. With its perfectly round shape and exquisite design, it adds a touch of elegance to any room or enclosed space. Simply place it in your drawer, hang it in your closet, or tuck it in your suitcase to experience a burst of enchanting scent wherever you go. Let the inviting fragrance of our round scented sachet create an atmosphere of relaxation and joy, transforming any space into a haven of olfactory bliss.",
  },
  {
    slug: "round-scented-sachet-blue",
    category: "Scented Sachet Candle",
    name: "Round Scented Sachet - Blue",
    image: ["sachet-round-blue-1.jpg"],
    star: 5,
    variant: "Blue Sky",
    dimension: {
      length: 80,
      width: 80,
      height: 10,
    },
    weight: 20,
    description:
      "Introducing our round scented sachet, a delightful burst of fragrance in a compact package. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This charming sachet effortlessly infuses your space with a captivating aroma. With its perfectly round shape and exquisite design, it adds a touch of elegance to any room or enclosed space. Simply place it in your drawer, hang it in your closet, or tuck it in your suitcase to experience a burst of enchanting scent wherever you go. Let the inviting fragrance of our round scented sachet create an atmosphere of relaxation and joy, transforming any space into a haven of olfactory bliss.",
  },
  {
    slug: "round-scented-sachet-purple",
    category: "Scented Sachet Candle",
    name: "Round Scented Sachet - Purple",
    image: ["sachet-round-purple-1.jpg"],
    star: 5,
    variant: "Purple Lavender",
    dimension: {
      length: 80,
      width: 80,
      height: 10,
    },
    weight: 20,
    description:
      "Introducing our round scented sachet, a delightful burst of fragrance in a compact package. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. This charming sachet effortlessly infuses your space with a captivating aroma. With its perfectly round shape and exquisite design, it adds a touch of elegance to any room or enclosed space. Simply place it in your drawer, hang it in your closet, or tuck it in your suitcase to experience a burst of enchanting scent wherever you go. Let the inviting fragrance of our round scented sachet create an atmosphere of relaxation and joy, transforming any space into a haven of olfactory bliss.",
  },
  {
    slug: "black-doff-glass-with-white-rose",
    category: "Glass Candle",
    name: "Black Doff Glass with White Rose",
    image: ["black-doff-glass-1.jpg", "black-doff-glass-2.jpg"],
    star: 5,
    variant: "White Vanilla",
    dimension: {
      length: 0,
      width: 0,
      height: 0,
    },
    weight: 0,
    description:
      "Introducing our Black Doff Glass with White Rose, a stunning fusion of darkness and delicacy. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. The sleek black doff glass vessel exudes an air of mystery and elegance, captivating the eye with its understated allure. Nestled within, a pristine white rose blooms, a symbol of purity and grace. This harmonious pairing creates a striking contrast, evoking a sense of refined beauty. Allow the enchanting fragrance to fill the air as the white rose releases its captivating aroma, creating a truly mesmerizing sensory experience. Elevate your space with the Black Doff Glass with White Rose, an embodiment of timeless elegance and aromatic bliss.",
  },
  {
    slug: "white-doff-glass-with-white-rose",
    category: "Glass Candle",
    name: "White Doff Glass with Pink Rose",
    image: ["white-doff-glass-1.jpg", "white-doff-glass-2.jpg"],
    star: 5,
    variant: "Pink Rose",
    dimension: {
      length: 0,
      width: 0,
      height: 0,
    },
    weight: 0,
    description:
      "Introducing our White Doff Glass with White Rose, a vision of pure elegance and serenity. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. The pristine white doff glass exudes a sense of purity and tranquility, effortlessly captivating the senses. Nestled within, a delicate white rose blossoms, exuding a gentle fragrance that fills the air with a soothing aura. This exquisite combination of the white doff glass and the delicate white rose creates a harmonious symphony of grace and beauty. Immerse yourself in the tranquil ambiance as the fragrance of the white rose envelops your space, creating a haven of serenity and bliss. Elevate your surroundings with the White Doff Glass with White Rose, a testament to refined aesthetics and aromatic enchantment.",
  },
  {
    slug: "jar-glass-white-candle",
    category: "Glass Candle",
    name: "Jar Glass White Candle",
    image: ["jar-glass-1.jpg", "jar-glass-2.jpg"],
    star: 5,
    variant: "White Vanilla",
    dimension: {
      length: 0,
      width: 0,
      height: 0,
    },
    weight: 0,
    description:
      "Introducing our Jar Glass White Candle, a timeless centerpiece of tranquility and illumination. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Encased in a sleek and elegant glass jar, this candle radiates a sense of purity and serenity. The soft glow emitted from within casts a warm and inviting ambiance, transforming any space into a haven of comfort. With its crisp white color, the candle exudes an air of simplicity and sophistication, effortlessly blending into any aesthetic. Ignite the wick and let the subtle fragrance envelop your surroundings, creating a soothing atmosphere that calms the senses. Embrace the gentle flicker and ethereal glow of our Jar Glass White Candle, as it adds a touch of enchantment and tranquility to your space.",
  },
  {
    slug: "small-rose-in-glass",
    category: "Glass Candle",
    name: "Small Rose in Glass",
    image: ["small-rose-glass-1.jpg", "small-rose-glass-2.jpg"],
    star: 5,
    variant: "Pink Rose",
    dimension: {
      length: 0,
      width: 0,
      height: 0,
    },
    weight: 0,
    description:
      "Introducing our Small Rose in Glass, a delicate marvel that encapsulates beauty and elegance. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Nestled within a clear glass enclosure, a single rose unfurls its petals, capturing the essence of romance and grace. This miniature masterpiece brings a touch of nature's splendor into your space, radiating with timeless allure. The preserved rose remains vibrant and everlasting, symbolizing enduring love and cherished moments. Whether displayed on a shelf or used as a decorative accent, our Small Rose in Glass adds a touch of enchantment to any setting. Revel in the captivating beauty of this preserved treasure, as it serves as a constant reminder of the beauty and joy found in the simplest of things.",
  },
  {
    slug: "rose-in-glass",
    category: "Glass Candle",
    name: "Rose in Glass",
    image: ["rose-glass-1.jpg", "rose-glass-2.jpg"],
    star: 5,
    variant: "Pink Rose",
    dimension: {
      length: 0,
      width: 0,
      height: 0,
    },
    weight: 0,
    description:
      "Introducing our Rose in Glass, a captivating display of beauty preserved in time. Crafted with vibrant colors and infused with essential oils, each 100% homemade candle is a work of art. Encased within a transparent glass dome, a single, meticulously preserved rose stands as a testament to everlasting elegance. The delicate petals retain their vibrant color and softness, while the glass enclosure protects and showcases their delicate form. This enchanting arrangement serves as a symbol of love, passion, and enduring beauty. Whether adorning your living space or offered as a heartfelt gift, the Rose in Glass is a timeless expression of emotions that transcends the passage of time. Revel in the mesmerizing allure of this exquisite creation, as it adds a touch of sophistication and romance to any setting.",
  },
];

export const listCategory = [
  "Scented Bubble Candle",
  "Scented Small Sachet Candle",
  "Scented Sachet Candle",
  "Glass Candle",
  // "Concrete Candle",
  // "Rose Candle",
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

export const getFilteredProducts = (slug) => {
  const product = listProduct.filter((item) => item.slug !== slug);
  return product || null;
};

export default listProduct;
