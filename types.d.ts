declare module 'turtlecoin-multi-hashing' {
	export function bcrypt(data: Buffer): Buffer;

	export function blake(data: Buffer): Buffer;

	export function boolberry(data: Buffer, targetSpad: Buffer, height?: number): Buffer;

	export function c11(data: Buffer): Buffer;

	// #region CryptoNight
	export function cryptonight(data: Buffer, fastOrVariant?: boolean | number): Buffer;

	export function cryptonightdark(data: Buffer, fastOrVariant?: boolean | number): Buffer;
	export function cryptonightdarklite(data: Buffer, fastOrVariant?: boolean | number): Buffer;

	export function cryptonightlite(data: Buffer, fastOrVariant?: boolean | number): Buffer;

	export function cryptonightturtle(data: Buffer, fastOrVariant?: boolean | number): Buffer;
	export function cryptonightturtlelite(data: Buffer, fastOrVariant?: boolean | number): Buffer;

	export function cryptonightfast(data: Buffer, fastOrVariant?: boolean | number): Buffer;

	export function cryptonightsoftshell(
		data: Buffer,
		fastOrVariant?: boolean | number,
		height?: number,
		memory?: number,
		window?: number,
		multiplier?: number
	): Buffer;
	// #endregion

	export function chukwa(data: Buffer): Buffer;

	export function fresh(data: Buffer): Buffer;

	export function fugue(data: Buffer): Buffer;

	// #region Groestl
	export function groestl(data: Buffer): Buffer;
	export function groestlmyriad(data: Buffer): Buffer;
	// #endregion

	export function hefty1(data: Buffer): Buffer;

	export function keccak(data: Buffer): Buffer;

	export function nist5(data: Buffer): Buffer;

	export function quark(data: Buffer): Buffer;

	export function qubit(data: Buffer): Buffer;

	// #region Scrypt
	export function scrypt(data: Buffer, n: number, r: number): Buffer;
	export function scryptn(data: Buffer, n: number): Buffer;
	export function scryptjane(
		data: Buffer,
		timestamp: number,
		chainStartTime: number,
		nMin: number,
		nMax: number
	): Buffer;
	// #endregion

	export function sha1(data: Buffer): Buffer;
	export function shavite3(data: Buffer): Buffer;

	export function skein(data: Buffer): Buffer;

	// #region X-Hash
	export function x11(data: Buffer): Buffer;
	export function x13(data: Buffer): Buffer;
	export function x15(data: Buffer): Buffer;
	// #endregion
}
