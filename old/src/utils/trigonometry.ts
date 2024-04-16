export type Point = {
	x: number;
	y: number;
};

/**
 * Calculate the distance between two points
 * @param p1
 * @param p2
 */
export function euclideanDistance(p1: Point, p2: Point): number {
	return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2) || 0;
}

/**
 * Calculate the hypotenuse of a triangle
 * @param adjacent
 * @param opposite
 */
export function squareTriangleHypotenuse(adjacent: number, opposite: number): number {
	return Math.sqrt(adjacent ** 2 + opposite ** 2) || 0;
}

/**
 * Calculate the length of the adjacent or opposite side of a triangle.
 * @param hypotenuse
 * @param side
 */
export function squareTriangleSideLength(hypotenuse: number, side: number): number {
	return Math.sqrt(hypotenuse ** 2 - side ** 2) || 0;
}

/**
 * Calculate the radian between three points.
 * The pivot point is the second point.
 * @param A
 * @param B pivot
 * @param C
 */
export function radiant(A: Point, B: Point, C: Point): number {
	// Calculate vectors AB and BC
	const AB = { x: B.x - A.x, y: B.y - A.y };
	const BC = { x: C.x - B.x, y: C.y - B.y };

	// Calculate the dot product of AB and BC
	const dotProduct = AB.x * BC.x + AB.y * BC.y;

	// Calculate the magnitudes (lengths) of vectors AB and BC
	const magnitudeAB = Math.sqrt(AB.x * AB.x + AB.y * AB.y) || 0;
	const magnitudeBC = Math.sqrt(BC.x * BC.x + BC.y * BC.y) || 0;

	// Calculate the cosine of the angle between vectors AB and BC
	const cosineTheta = dotProduct / (magnitudeAB * magnitudeBC);

	// Calculate the angle in radians
	return Math.acos(cosineTheta);
}

/**
 * Calculate the area of a triangle
 * @param d1
 * @param d2
 * @param d3
 */
export function triangleHeronArea(d1: number, d2: number, d3: number): number {
	const s = (d1 + d2 + d3) / 2;
	return Math.sqrt(s * (s - d1) * (s - d2) * (s - d3)) || 0;
}

export function triangleHeight(area: number, base: number): number {
	return (2 * area) / base;
}

/**
 * Calculate the area of a triangle
 * @param base
 * @param height
 */
export function triangleArea(base: number, height: number): number {
	return (base * height) / 2;
}
