
import type { PackageDetails } from "../../api/types/packageDetails";
import { getFeaturedPackages } from "../../api/queries/getFeaturedPackages";

export interface HomeLoaderResult {
	featuredPackages: PackageDetails[];
}

const homeLoader = async (): Promise<HomeLoaderResult> => {
	const featuredPackages = await getFeaturedPackages();

	return {
		featuredPackages,
	}
}

export { homeLoader };
