export class User {
    public id: string;
    public email: string;
    public coin: Number;
    public age: string;
    public address: string;
    public sex: string;
    public role: string;
    public referral: Object;
    public balance: Number;
    public token: string;

    constructor(obj?: any) {
        obj = obj || {}
        this.id = obj.id || '';
        this.email = obj.email || '';
        this.coin = obj.coin || 0;
        this.age = obj.age || '';
        this.address = obj.address || '';
        this.sex = obj.sex || '';
        this.role = obj.role || 0;
        this.role = obj.role || '';
        this.referral = obj.referral || {};
        this.balance = obj.balance || 0;
        this.token = obj.token || '';
    }
}