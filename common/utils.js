export default {
	/**
	 * @method 深拷贝
	 * @param <object> json 目标对象
	 * @param <object> jsonCopy 拷贝对象
	 */
	deepClone(json, jsonCopy = {}) {
		try {
			return JSON.parse(JSON.stringify(json));
		} catch (error) {
			for (let i in json) {
				if (typeof json[i] == 'object') {
					jsonCopy[i] = (json[i].constructor === Array) ? [] : {};
					this.deepClone(json[i], jsonCopy[i]);
				} else {
					if (json.hasOwnProperty(i)) {
						jsonCopy[i] = json[i];
					}
				}
			}
			return jsonCopy;
		}
	},
	/**
	 * @method 判断变量类型
	 * @param <any> variable 变量
	 */
	getVariableType(variable){
		return (Object.prototype.toString.call(variable)).slice(8, -1);
	}
}
