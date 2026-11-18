export type MenuCategory = "Rice" | "Swallow" | "Proteins" | "Drinks";

export type CartItem = {
  item: MenuItem;
  quantity: number;
};


export interface MenuItem {
    id: number;
    name: string;
    description: string;
    category: MenuCategory;
    price: number;
    image: string;
    available: boolean;
};

export const menuItems: MenuItem[] = [
    {
        id: 1,
        name: "Jollof Rice",
        description: "Parboiled rice with a mixture of tomato sauce, spices, vegetables and seasoning.",
        category: "Rice",
        price: 3500,
        image: "/images/jollof-rice.jpg",
        available: true,
    },
    {
        id: 2,
        name: "Amala and Ewedu",
        description: "Yam flour made in morsel with jute leaves blended and cooked.",
        category: "Swallow",
        price: 4000,
        image: "/images/amala-ewedu.webp",
        available: true,
    },
    {
        id: 3,
        name: "Grilled Turkey",
        description: "Soft grilled big sized turkey seasoned with pepper sauce.",
        category: "Proteins",
        price: 3000,
        image: "/images/grilled-turkey.jpg",
        available: true,
    },
    {
        id: 4,
        name: "Eba and Egusi",
        description: "Cassava flakes(garri) made with hot water and Melon seed stew.",
        category: "Swallow",
        price: 4000,
        image: "/images/eba-egusi.jpg",
        available: true,
    },
    {
        id: 5,
        name: "Peppered Suya",
        description: "Dried and grilled goat meat dipped in dry granulated pepper.",
        category: "Proteins",
        price: 3000,
        image: "/images/suya.jpg",
        available: false,
    },
    {
        id: 6,
        name: "Zobo",
        description: "Sweetened drink gotten from dry hibiscus flower.",
        category: "Drinks",
        price: 1000,
        image: "/images/zobo.jpg",
        available: true,
    },
    {
        id: 7,
        name: "Bottle Water",
        description: "A bottle of sparkling water.",
        category: "Drinks",
        price: 500,
        image: "/images/bottled-water.avif",
        available: true,
    }
    
];