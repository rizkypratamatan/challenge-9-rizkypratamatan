export interface AddProductRequest {
    id?: string;

    title: string;

    description: string;

    price: string;

    stock: string;

    categoryId: string;

    images: FileList;

    isActive: boolean;
}
