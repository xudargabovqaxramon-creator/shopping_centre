export interface CreateProductDTO {
    title: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    category_id: number;
}
export interface UpdateProductDTO {
    title?: string;
    description?: string;
    price?: number;
    quantity: number;
    image?: string;
    category_id?: number;
}
//# sourceMappingURL=product.dto.d.ts.map