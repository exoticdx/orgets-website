import bananaPowderImg from '../assets/banana_powder.jpg';

// Helper to get image URL (using placeholder if local image not available)
const getProductImage = (id) => {
    if (id === 'banana-powder') return bananaPowderImg;
    // Use a generic placeholder with the product name for others
    return `https://placehold.co/600x400/f3f4f6/005826?text=${id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('+')}`;
};

export const products = [
    {
        id: "spray-dried-beetroot-powder",
        name: "Spray Dried Beetroot Powder",
        tag: "Vegetable Powder",
        description: "Premium spray dried powder with a rich red hue and natural sweetness.",
        longDescription: "Ideal natural colorant for beverages, baking, and cosmetics. High in antioxidants and additive-free.",
        specs: [
            "100% Soluble",
            "High in Antioxidants",
            "Additive-free",
            "Vegan"
        ],
        image: getProductImage("spray-dried-beetroot-powder")
    },
    {
        id: "spray-dried-apple-powder",
        name: "Spray Dried Apple Powder",
        tag: "Fruit Powder",
        description: "Features a concentrated, sweet-tart flavor profile.",
        longDescription: "Fine texture allows for easy blending in bakery products, beverages, and seasonings. Delivers authentic apple taste and aroma.",
        specs: [
            "Authentic Taste",
            "Vegan",
            "Naturally Sweet"
        ],
        image: getProductImage("spray-dried-apple-powder")
    },
    {
        id: "spray-dried-amla-fruit-powder",
        name: "Spray Dried Amla Fruit Powder",
        tag: "Fruit Powder",
        description: "Derived from Indian gooseberries, offering a distinct sour and astringent taste profile.",
        longDescription: "Fine, free-flowing powder suitable for nutraceuticals, herbal formulations, and beverage mixes.",
        specs: [
            "Rich in Vitamin C",
            "Immunity Booster",
            "Vegan",
            "Ayurvedic Superfood"
        ],
        image: getProductImage("spray-dried-amla-fruit-powder")
    },
    {
        id: "spray-dried-blueberry-powder",
        name: "Spray Dried Blueberry Powder",
        tag: "Fruit Powder",
        description: "Delivers a vibrant purple hue and authentic sweet-tart berry flavor.",
        longDescription: "Ideal for confectionery, bakery items, and dry mixes. Fine texture ensures uniform distribution in food formulations.",
        specs: [
            "Antioxidant Rich",
            "Vegan",
            "Superfood"
        ],
        image: getProductImage("spray-dried-blueberry-powder")
    },
    {
        id: "spray-dried-aloe-vera-juice-powder",
        name: "Spray Dried Aloe Vera Juice Powder",
        tag: "Herbal Powder",
        description: "Offers a mild, neutral flavor and fine consistency.",
        longDescription: "Commonly used in skincare products, cosmetics, and wellness supplements. Retains the essential properties of aloe for versatile applications.",
        specs: [
            "Digestive Support",
            "Vegan",
            "Skin & Hydration"
        ],
        image: getProductImage("spray-dried-aloe-vera-juice-powder")
    },
    {
        id: "spray-dried-coconut-water-powder",
        name: "Spray Dried Coconut Water Powder",
        tag: "Fruit Powder",
        description: "Captures the authentic profile of fresh coconut water.",
        longDescription: "Fine texture is suitable for beverage mixes, sports nutrition, and electrolytes. Delivers a mild, sweet taste.",
        specs: [
            "Rich in Electrolytes",
            "Natural Electrolytes",
            "Vegan",
            "Hydration Superfood"
        ],
        image: getProductImage("spray-dried-coconut-water-powder")
    },
    {
        id: "spray-dried-chikoo-powder",
        name: "Spray Dried Chikoo Powder",
        tag: "Fruit Powder",
        description: "Captures the distinct sweet, malty flavor of sapodilla.",
        longDescription: "This fine, light brown powder is ideal for milkshakes, ice creams, and baby food formulations. Offers easy blending.",
        specs: [
            "Natural Energy",
            "Vegan",
            "Fruit Sweetness"
        ],
        image: getProductImage("spray-dried-chikoo-powder")
    },
    {
        id: "spray-dried-black-grape-powder",
        name: "Spray Dried Black Grape Powder",
        tag: "Fruit Powder",
        description: "Offers a deep purple color and concentrated sweet-tangy grape flavor.",
        longDescription: "Versatile ingredient for beverages, confectionery, and functional foods. Fine consistency allows for easy incorporation.",
        specs: [
            "Rich in Antioxidants",
            "Polyphenol Rich"
        ],
        image: getProductImage("spray-dried-black-grape-powder")
    },
    {
        id: "spray-dried-custard-apple-powder",
        name: "Spray Dried Custard Apple Powder",
        tag: "Fruit Powder",
        description: "Naturally Sweet Creamy Tropical Fruit.",
        longDescription: "Fine powder ideal for beverages and desserts, capturing the creamy sweetness of custard apple.",
        specs: [
            "Naturally Sweet",
            "Tropical Fruit"
        ],
        image: getProductImage("spray-dried-custard-apple-powder")
    },
    {
        id: "spray-dried-mango-powder",
        name: "Spray Dried Mango Powder",
        tag: "Fruit Powder",
        description: "Captures the rich, tropical sweetness of ripe mangoes.",
        longDescription: "This fine, vibrant yellow powder is ideal for beverages, bakery fillings, and seasonings. Delivers authentic aroma and taste.",
        specs: [
            "Natural Energy",
            "Vegan",
            "Tropical Fruit Goodness"
        ],
        image: getProductImage("spray-dried-mango-powder")
    },
    {
        id: "spray-dried-moringa-powder",
        name: "Spray Dried Moringa Powder",
        tag: "Superfood Powder",
        description: "Offers a mild, earthy flavor derived from fresh moringa leaves.",
        longDescription: "Fine green powder suitable for nutritional supplements, smoothie mixes, and health foods. Uniform texture for easy processing.",
        specs: [
            "Rich in Vitamins & Iron",
            "Immunity Booster",
            "Vegan",
            "Nutrient Dense"
        ],
        image: getProductImage("spray-dried-moringa-powder")
    },
    {
        id: "spray-dried-pink-guava-powder",
        name: "Spray Dried Pink Guava Powder",
        tag: "Fruit Powder",
        description: "Features a distinctive sweet-musky taste and vibrant pink hue.",
        longDescription: "Ideal for flavoring beverages, desserts, and confectionery. Fine, free-flowing texture ensures easy blending.",
        specs: [
            "Rich in Vitamin C",
            "Vegan",
            "Tropical Superfruit"
        ],
        image: getProductImage("spray-dried-pink-guava-powder")
    },
    {
        id: "spray-dried-mulberry-powder",
        name: "Spray Dried Mulberry Powder",
        tag: "Fruit Powder",
        description: "Delivers a rich, sweet-tart flavor and deep purple hue.",
        longDescription: "Perfect for confectionery, health mixes, and bakery items. Fine consistency ensures uniform distribution.",
        specs: [
            "Rich in Antioxidants",
            "Rich in Iron",
            "Vegan",
            "Superfruit"
        ],
        image: getProductImage("spray-dried-mulberry-powder")
    },
    {
        id: "spray-dried-cranberry-powder",
        name: "Spray Dried Cranberry Powder",
        tag: "Fruit Powder",
        description: "Offers a sharp, tangy flavor and vibrant red color.",
        longDescription: "Ideal for use in functional beverages, nutritional bars, and confectionery. Fine powder form allows for consistent blending.",
        specs: [
            "Antioxidant Rich",
            "Vegan",
            "Sugar Free"
        ],
        image: getProductImage("spray-dried-cranberry-powder")
    },
    {
        id: "spray-dried-dates-powder",
        name: "Spray Dried Dates Powder",
        tag: "Fruit Powder",
        description: "Offers a natural, rich sweetness with caramel undertones.",
        longDescription: "A versatile sweetener for bakery, baby food, and energy bars. Fine texture ensures smooth integration into recipes.",
        specs: [
            "Natural Sweetener",
            "Rich in Iron & Minerals",
            "Vegan",
            "Gluten Free"
        ],
        image: getProductImage("spray-dried-dates-powder")
    },
    {
        id: "spray-dried-dragon-fruit-powder",
        name: "Spray Dried Dragon Fruit Powder",
        tag: "Fruit Powder",
        description: "Features a striking magenta hue and subtle sweetness.",
        longDescription: "Excellent for vivid coloring in beverages, smoothie bowls, and bakery items. Fine consistency allows for uniform blending.",
        specs: [
            "Antioxidant Rich",
            "Vegan",
            "Superfruit"
        ],
        image: getProductImage("spray-dried-dragon-fruit-powder")
    },
    {
        id: "spray-dried-fig-powder",
        name: "Spray Dried Fig Powder",
        tag: "Fruit Powder",
        description: "Captures the sweet, earthy profile of ripe figs.",
        longDescription: "This light brown powder serves as an excellent ingredient for bakery items, energy bars, and dairy products.",
        specs: [
            "Digestive Support",
            "Rich in Calcium",
            "Vegan"
        ],
        image: getProductImage("spray-dried-fig-powder")
    },
    {
        id: "spray-dried-jamun-fruit-powder",
        name: "Spray Dried Jamun Fruit Powder",
        tag: "Fruit Powder",
        description: "Features a unique astringent, sweet-sour taste and deep purple color.",
        longDescription: "Ideal for beverages, functional foods, and dry mixes. Traditionally known for blood sugar support.",
        specs: [
            "Blood Sugar Support",
            "Antioxidant Rich",
            "Vegan",
            "Ayurvedic Superfruit"
        ],
        image: getProductImage("spray-dried-jamun-fruit-powder")
    },
    {
        id: "spray-dried-litchi-powder",
        name: "Spray Dried Litchi Powder",
        tag: "Fruit Powder",
        description: "Captures the delicate, floral sweetness of fresh lychees.",
        longDescription: "Ideal for beverages, desserts, and confectionery. Fine texture ensures authentic flavor and aroma.",
        specs: [
            "Naturally Sweet",
            "Vegan",
            "Tropical Fruit Nutrition"
        ],
        image: getProductImage("spray-dried-litchi-powder")
    },
    {
        id: "spray-dried-kiwi-powder",
        name: "Spray Dried Kiwi Powder",
        tag: "Fruit Powder",
        description: "Offers a distinct tangy-sweet flavor profile and subtle green hue.",
        longDescription: "Ideal for beverages, sorbets, and confectionery. Fine, free-flowing texture allows for easy blending.",
        specs: [
            "Rich in Vitamin C",
            "Vegan",
            "Sugar Free"
        ],
        image: getProductImage("spray-dried-kiwi-powder")
    },
    {
        id: "spray-dried-acai-berry-powder",
        name: "Spray Dried Acai Berry Powder",
        tag: "Superfood Powder",
        description: "Features a rich purple hue and distinct earthy-berry taste.",
        longDescription: "Popular for smoothie bowls, beverages, and functional foods. Naturally rich in antioxidants and healthy fats.",
        specs: [
            "Antioxidant Boost",
            "Vegan",
            "Superberry"
        ],
        image: getProductImage("spray-dried-acai-berry-powder")
    },
    {
        id: "spray-dried-white-guava-powder",
        name: "Spray Dried White Guava Powder",
        tag: "Fruit Powder",
        description: "Captures the distinct sweet and musky flavor of the fruit.",
        longDescription: "This fine, creamy-white powder is perfect for beverages, confectionery, and savory seasonings.",
        specs: [
            "Vitamin C Boost",
            "Dietary Fiber",
            "Vegan"
        ],
        image: getProductImage("spray-dried-white-guava-powder")
    },
    {
        id: "spray-dried-papaya-powder",
        name: "Spray Dried Papaya Powder",
        tag: "Fruit Powder",
        description: "Offers a mild, tropical sweetness and distinctive orange hue.",
        longDescription: "Ideal for beverages, baby food, and bakery fillings. Fine consistency ensures smooth integration.",
        specs: [
            "Digestive Support",
            "Rich in Enzymes",
            "Vegan"
        ],
        image: getProductImage("spray-dried-papaya-powder")
    },
    {
        id: "spray-dried-pineapple-powder",
        name: "Spray Dried Pineapple Powder",
        tag: "Fruit Powder",
        description: "Captures the tangy-sweet tropical flavor of fresh fruit.",
        longDescription: "This fine yellow powder is ideal for beverages, bakery fillings, and seasonings. Delivers consistent taste and aroma.",
        specs: [
            "Rich in Bromelain",
            "Digestive Support",
            "Vegan",
            "Tropical Superfruit"
        ],
        image: getProductImage("spray-dried-pineapple-powder")
    },
    {
        id: "spray-dried-raspberry-powder",
        name: "Spray Dried Raspberry Powder",
        tag: "Fruit Powder",
        description: "Features a vibrant red color and a tart-sweet flavor profile.",
        longDescription: "Perfect for confectionery, bakery glazes, and beverage mixes. Fine texture ensures easy blending and authentic fruit taste.",
        specs: [
            "Antioxidant Boost",
            "Rich in Vitamin C",
            "Vegan",
            "Superberry"
        ],
        image: getProductImage("spray-dried-raspberry-powder")
    },
    {
        id: "spray-dried-strawberry-powder",
        name: "Spray Dried Strawberry Powder",
        tag: "Fruit Powder",
        description: "Delivers a sweet, aromatic profile and vibrant red hue.",
        longDescription: "Ideal for confectionery, dairy products, and bakery fillings. Fine consistency ensures consistent flavor distribution.",
        specs: [
            "Antioxidant Rich",
            "Rich in Vitamin C",
            "Vegan",
            "Superberry"
        ],
        image: getProductImage("spray-dried-strawberry-powder")
    },
    {
        id: "spray-dried-sugarcane-powder",
        name: "Spray Dried Sugarcane Powder",
        tag: "Sweetener",
        description: "Captures the natural sweetness and grassy notes of fresh cane juice.",
        longDescription: "A versatile sweetener for beverages, confectionery, and traditional desserts. Fine texture allows for easy dissolving.",
        specs: [
            "Natural Energy",
            "Plant Based",
            "Refreshing"
        ],
        image: getProductImage("spray-dried-sugarcane-powder")
    },
    {
        id: "spray-dried-tamarind-powder",
        name: "Spray Dried Tamarind Powder",
        tag: "Spice/Seasoning",
        description: "Captures the sharp, tangy sourness of the fruit.",
        longDescription: "A convenient ingredient for seasonings, savory sauces, and beverages. Fine brown powder ensures consistent acidity.",
        specs: [
            "Tangy Flavor",
            "Culinary Essential",
            "Vegan"
        ],
        image: getProductImage("spray-dried-tamarind-powder")
    },
    {
        id: "spray-dried-watermelon-powder",
        name: "Spray Dried Watermelon Powder",
        tag: "Fruit Powder",
        description: "Captures the refreshing sweetness and distinct pink hue of fresh fruit.",
        longDescription: "Ideal for instant beverages, confectionery, and sorbets. Fine, free-flowing texture ensures easy solubility.",
        specs: [
            "Hydration Support",
            "Vegan",
            "Summer Superfood"
        ],
        image: getProductImage("spray-dried-watermelon-powder")
    },
    {
        id: "spray-dried-avocado-powder",
        name: "Spray Dried Avocado Powder",
        tag: "Fruit Powder",
        description: "Retains the rich, creamy texture and subtle nutty flavor of fresh avocados.",
        longDescription: "Perfect for guacamole mixes, creamy dressings, and baby food. Fine powder form ensures easy storage and blending.",
        specs: [
            "Healthy Fats",
            "Vegan",
            "Superfood"
        ],
        image: getProductImage("spray-dried-avocado-powder")
    },
    {
        id: "spray-dried-cherry-powder",
        name: "Spray Dried Cherry Powder",
        tag: "Fruit Powder",
        description: "Delivers a rich tart-sweet flavor and deep red hue.",
        longDescription: "Ideal for bakery fillings, confectionery, and functional beverages. Fine texture allows for easy mixing.",
        specs: [
            "Antioxidant Boost",
            "Rich in Vitamin C",
            "Vegan",
            "Superfruit"
        ],
        image: getProductImage("spray-dried-cherry-powder")
    },
    {
        id: "spray-dried-passion-fruit-powder",
        name: "Spray Dried Passion Fruit Powder",
        tag: "Fruit Powder",
        description: "Delivers an intense tangy-tropical flavor and vibrant yellow hue.",
        longDescription: "Perfect for beverages, desserts, and confectionery. Fine consistency ensures easy blending and authentic aroma.",
        specs: [
            "Tropical Flavor",
            "Naturally Refreshing",
            "Vegan",
            "Exotic Superfruit"
        ],
        image: getProductImage("spray-dried-passion-fruit-powder")
    },
    {
        id: "spray-dried-stevia-powder",
        name: "Spray Dried Stevia Powder",
        tag: "Sweetener",
        description: "Delivers intense sweetness with a clean taste profile.",
        longDescription: "An effective sugar substitute for beverages, baking, and dietary products. Fine powder form ensures easy dosing.",
        specs: [
            "Zero Calorie",
            "Diabetic Friendly",
            "Plant Based"
        ],
        image: getProductImage("spray-dried-stevia-powder")
    },
    {
        id: "spray-dried-blackberry-powder",
        name: "Spray Dried Blackberry Powder",
        tag: "Fruit Powder",
        description: "Offers a rich, deep purple hue and authentic sweet-tart flavor.",
        longDescription: "Ideal for confectionery, bakery fillings, and beverages. Fine consistency allows for uniform blending in mixes.",
        specs: [
            "Rich in Antioxidants",
            "Rich in Vitamin C"
        ],
        image: getProductImage("spray-dried-blackberry-powder")
    },
    {
        id: 'banana-powder',
        name: 'Freeze Dry Banana Powder',
        tag: 'Fruit Powder',
        image: getProductImage("banana-powder"),
        description: 'Natural freeze-dried banana powder for baby food and confectionery.',
        longDescription: 'Premium Freeze Dried Banana Powder made from ripe bananas. Retains the natural flavor, color, and nutritional value of fresh bananas. Excellent for baby food, bakery products, smoothies, and confectionery.',
        specs: ['Origin: India', 'Process: Freeze Dried', 'Additives: None', 'Shelf Life: 18 Months']
    }
];
