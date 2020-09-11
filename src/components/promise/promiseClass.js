//Promise类
class Promise {
    constructor(executer) {
        // 初始化state为等待态
        this.status = 'pending';
        // 成功的值
        this.value = undefined;
        // 失败的原因
        this.reason = undefined;
        let resolve = value => {
            // status改变,resolve调用就会失败
            if (this.status === 'pending') {
                // resolve调用后，status转化为成功态
                this.status = 'resolve';
                // 储存成功的值
                this.value = value;
            }
        };
        //失败
        let reject = reason => {
            // status改变,reject调用就会失败
            if (this.status === 'pending') {
                // reject调用后，status转化为失败态
                this.status = 'rejected';
                // 储存失败的原因
                this.reason = reason;
            }
        };
        // 如果executor执行报错，直接执行reject
        //executor里面有两个参数，一个叫resolve（成功），一个叫reject（失败）
        try {
            executer(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }
   // Promise有一个叫做then的方法，里面有两个参数：onFulfilled,onRejected,成功有成功的值，失败有失败的原因
    then(onFulfilled, onReject) {
        // 状态为resolve，执行onFulfilled，传入成功的值
        if (this.status === 'resolve') {
            onFulfilled(this.value);
        }
        // 状态为reject，执行onFulfilled，传入失败的原因
        if (this.status === 'reject') {
            onReject(this.reason);
        }
    }
}