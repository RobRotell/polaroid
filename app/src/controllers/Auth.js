export class Auth {


	/**
	 * Super simple auth code validation
	 *
	 * @param {string} auth
	 * @return {bool} True, if valid; otherwise, false
	 */
	static validate( auth = '' ) {
		return auth === process.env.AUTH
	}


}
