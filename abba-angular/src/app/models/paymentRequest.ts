export class PaymentRequest {
    public userId: any;
    public amount: number;
    public type: number;
    public status : string;
    public code: string;
    public serial: string;
    public phone: string;
    constructor(obj?: any) {
        obj = obj || {};
        this.userId = obj.userId || {};
        this.amount = obj.amount || 0;
        this.type   = obj.type || 0;
        this.status = obj.status || '';
        this.code   = obj.code || '';
        this.serial = obj.serial || '';
        this.phone  = obj.phone || '';
    }
}