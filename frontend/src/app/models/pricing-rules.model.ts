export class PricingRulesModel {
    public _id: string;
    public clientId: string;
    public productId: string;
    public minimum: number;
    public discountPercent: number;
    public itemsToDiscount?: number;

    PricingRulesModel() {

    }
}
