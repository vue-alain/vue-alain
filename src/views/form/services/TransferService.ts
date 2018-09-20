export class TransferService {
    private step: 0 | 1 | 2 = 1;

    /**
     * 付款账户
     */
    private payAccount: string = '';

    /**
     * 收款账户类型
     */
    private receiverType: 'alipay' | 'bank' = 'alipay';

    get receiverTypeStr() {
        return this.receiverType === 'alipay' ? '支付宝' : '银行';
    }

    /**
     * 收款账户
     */
    private receiverAccount: string = '';

    /**
     * 收款姓名
     */
    private receiverName: string = '';

    /**
     * 金额
     */
    private amount: number = 0;

    /**
     * 支付密码
     */
    private password: string = '123456';

    constructor() {
        this.again();
    }

    private again() {
        this.step = 0;
        this.payAccount = 'ant-design@alipay.com';
        this.receiverType = 'alipay';
        this.receiverAccount = 'test@example.com';
        this.receiverName = 'asdf';
        this.amount = 500;
    }

}
