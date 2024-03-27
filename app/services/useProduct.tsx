import { API_URL } from "../config.js";

// const API_URL = process.env.API_URL;

export async function useProduct(product: string) {
	const res = await fetch(`${API_URL}/${product}`);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	return data;
}
