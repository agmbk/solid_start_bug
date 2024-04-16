import { isServer } from 'solid-js/web';

export class Cookies {
	private readonly cookies: Map<string, string> = new Map();

	constructor(private readonly cookieString: string = document?.cookie ?? '') {
		this.parse();
	}

	/**
	 * Delete a cookie from the browser.
	 * **Warning:** client side only.
	 * @param key
	 * @param path
	 * @param domain
	 */
	public static delete(
		key: string,
		path: string = '/',
		domain: string = location.hostname,
	): void {
		if (isServer) throw new Error('Cannot delete cookie on server');
		document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; domain=${domain}`;
	}

	public delete(key: string): void {
		this.cookies.delete(key);
	}

	public exist(key: string): boolean {
		return this.cookies.has(key);
	}

	public get(key: string): string | undefined {
		return this.cookies.get(key);
	}

	public set(key: string, value: string): void {
		this.cookies.set(key, value);
	}

	public toString(): string {
		const cookies: string[] = [];
		for (const [key, value] of this.cookies) {
			cookies.push(`${key}=${value}`);
		}
		return cookies.join('; ');
	}

	private parse(): void {
		this.cookies.clear();
		const cookies = this.cookieString.split('; ');
		let index: number;
		let key: string;
		let value: string;
		for (const cookie of cookies) {
			index = cookie.indexOf('=');
			key = cookie.slice(0, index);
			value = cookie.slice(index + 1);
			this.cookies.set(key, value.trim());
		}
	}
}
