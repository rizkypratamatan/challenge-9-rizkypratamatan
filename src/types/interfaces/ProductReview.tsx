interface ProductReviewUser {
    id: number;

    name: string;

    avatarUrl: string;
}


export interface ProductReview {
    id: number;

    star: number;

    comment: string;

    createdAt: Date;

    user: ProductReviewUser;
}
