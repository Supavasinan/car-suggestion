export type CarBrandProp = {
    item: {
        name: string,
        slug: string,
        image: {
            source: string,
            thumb: string,
            optimized: string,
            original: string,
            localThumb: string,
            localOptimized: string,
            localOriginal: string
        }
    }
}




export type CarModelProp = {
    carModel: string
    setCarModel: (carModel: string) => void;
}

export type SearchManuFacturerProps = {
    manufacturer: string
    setManuFacturer: (manufacturer: string) => void;
}

export type FilterProps = {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}

export type CarProps = {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
    message?: string
}

export type CarCardProps = {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
}

export type ShowMoreProps = {
    pageNumber: number
    isNext: boolean
}

export type SetFilterProp = {
    SetManufacturer: string
    SetModel: string
}