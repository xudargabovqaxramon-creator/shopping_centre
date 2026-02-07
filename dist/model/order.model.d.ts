import { Model } from "sequelize";
export declare class Order extends Model {
    id: number;
    userId: number;
    totalPrice: number;
    status: "pending" | "paid" | "cancelled";
    firstName: string;
    company?: string;
    address: string;
    city: string;
    phone: string;
    email: string;
}
//# sourceMappingURL=order.model.d.ts.map