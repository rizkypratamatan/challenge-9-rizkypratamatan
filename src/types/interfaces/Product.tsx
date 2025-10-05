import {ProductCategory} from "@/types/interfaces/ProductCategory";
import {ProductReview} from "@/types/interfaces/ProductReview";
import {ProductShop} from "@/types/interfaces/ProductShop";


export interface Product {
    id: number;

    title: string;

    slug: string;

    description: string;

    price: number;

    stock: number;

    images: string[];

    isActive: boolean;

    rating: number;

    reviewCount: number;

    soldCount: number;

    shopId: number;

    categoryId: number;

    createdAt: Date;

    updatedAt: Date;

    category: ProductCategory;

    shop: ProductShop;

    reviews: ProductReview[];
}
