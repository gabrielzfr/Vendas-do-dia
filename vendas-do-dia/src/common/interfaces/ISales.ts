import { SaleType } from "../types/SaleType";

export interface ISales {
    type: SaleType; 
    value: number;
    id: string
}