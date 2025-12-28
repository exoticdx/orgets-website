import bananaPowderImg from '../assets/banana_powder.jpg';

export const products = [
    {
        id: 'jaggery',
        name: 'Organic Jaggery',
        tag: 'Natural Sweetener',
        image: 'https://placehold.co/600x400/f3f4f6/005826?text=Organic+Jaggery',
        description: 'Pure, chemical-free jaggery sourced from traditional farms.',
        longDescription: 'Our Organic Jaggery is produced using traditional methods without any chemicals or preservatives. It retains all natural minerals and vitamins, making it a perfect healthy alternative to refined sugar. Sourced directly from certified organic sugarcane farms in Maharashtra and Karnataka.',
        specs: ['Origin: India', 'Form: Cubes/Powder', 'Packaging: 1kg, 5kg, 25kg', 'Shelf Life: 12 Months']
    },
    {
        id: 'moringa',
        name: 'Moringa Powder',
        tag: 'Superfood',
        image: 'https://placehold.co/600x400/f3f4f6/005826?text=Moringa+Powder',
        description: 'Nutrient-rich moringa leaf powder, perfect for supplements.',
        longDescription: 'Made from fresh, young moringa leaves, dried at low temperatures to preserve nutrients. Rich in protein, vitamins, and antioxidants. Ideal for smoothies, teas, and health supplements.',
        specs: ['Origin: India', 'Mesh Size: 80-100', 'Color: Bright Green', 'Certification: Organic']
    },
    {
        id: 'neem',
        name: 'Neem Powder',
        tag: 'Herbal & Medicinal',
        image: 'https://placehold.co/600x400/f3f4f6/005826?text=Neem+Powder',
        description: 'Premium quality neem powder for pharmaceutical and cosmetic use.',
        longDescription: 'High-quality Neem leaf powder known for its antibacterial and antifungal properties. Widely used in skincare products, organic fertilizers, and herbal medicines.',
        specs: ['Origin: India', 'Purity: 100%', 'Application: Cosmetic/Agri', 'Packaging: Bulk']
    },
    {
        id: 'cow-dung',
        name: 'Cow Dung',
        tag: 'Fertilizer & Religious',
        image: 'https://placehold.co/600x400/f3f4f6/005826?text=Cow+Dung',
        description: 'Dried and processed cow dung for agricultural and religious purposes.',
        longDescription: 'Sun-dried and processed cow dung cakes and powder. Essential for organic farming as a fertilizer and widely used in traditional Indian religious ceremonies (Havan).',
        specs: ['Origin: India', 'Moisture: <10%', 'Form: Cake/Powder', 'Odor: Natural']
    },
    {
        id: 'banana-powder',
        name: 'Freeze Dry Banana Powder',
        tag: 'Fruit Powder',
        image: bananaPowderImg,
        description: 'Natural freeze-dried banana powder for baby food and confectionery.',
        longDescription: 'Premium Freeze Dried Banana Powder made from ripe bananas. Retains the natural flavor, color, and nutritional value of fresh bananas. Excellent for baby food, bakery products, smoothies, and confectionery.',
        specs: ['Origin: India', 'Process: Freeze Dried', 'Additives: None', 'Shelf Life: 18 Months']
    }
];
