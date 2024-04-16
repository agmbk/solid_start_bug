enum Env {
	DEVELOPMENT = 'development',
	PRODUCTION = 'production',
	STAGING = 'staging',
}

export type Config = Readonly<{
	DEV: boolean;
	ENV: Env;
	PROD: boolean;
	STAGING: boolean;
}>;

export const enum Path {
	HOME = '/',
	LOGIN = '/login',
	NOT_FOUND = '/notFound',
}

const ENV = import.meta.env.VITE_ENV;

const config: Config = {
	DEV: ENV === Env.DEVELOPMENT,
	ENV,
	PROD: ENV === Env.PRODUCTION,
	STAGING: ENV === Env.STAGING,
};

if (!Object.values(Env).includes(config.ENV)) {
	throw new Error(`ENV is not set or invalid ${Object.values(Env)} ${JSON.stringify(config)}`);
}

export default Object.freeze(config);
