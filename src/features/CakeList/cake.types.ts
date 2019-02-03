export interface CakeServerResponse {
	title: string;
	bakedBy: string;
	creator?: string;
}
export interface Cake extends CakeServerResponse {
	key: string;
}

export const cakeServerResponseToCake = (object: {[key: string]: CakeServerResponse}): Cake[] => {
	if (object) {
		return Object.entries(object)
			.map(([ key, innerObject ]) => ({ ...innerObject, key }));
	}
	return [];
};
