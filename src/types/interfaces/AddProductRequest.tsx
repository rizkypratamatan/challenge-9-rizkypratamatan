export interface AddProductRequest {
    title: string;

    description: string;

    price: string;

    stock: string;

    categoryId: string;

    images: FileList;

    isActive: boolean;
}
