class sessionStorage {
    session = window.sessionStorage;

    constructor() {
        this.create("xhsdnn", { username: "xhsdnn", password: "123456", phone: "16619779X4X", email: "daiqiangsummy@gmail.com" });
    }

    /*
     * 新增
     * key { String }
     * value { Any }
     */
    create(key, value) {
        if (typeof value === "object" && value !== null) {
            value = JSON.stringify(value);
        }
        this.session.setItem(key, value);
    }

    /*
     * 查询
     * key { String }
     */
    show(key) {
        let value = this.session.getItem(key);

        try {
            value = JSON.parse(value);
        } catch (e) {
            return value;
        }

        return value;
    }

    /*
     * 更新
     * key { String }
     * value { Any }
     */
    update(key, value) {
        if (typeof value === "object" && value !== null) {
            value = JSON.stringify(value);
        }
        this.session.setItem(key, value);
    }

    /*
     * 删除
     * key { String }
     */
    delete(key) {
        this.session.removeItem(key);
    }

    /*
     * 删除所有
     */
    clear() {
        this.session.clear();
    }
}

let DB = new sessionStorage();

export { DB };