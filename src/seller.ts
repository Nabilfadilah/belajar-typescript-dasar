export interface Seller {
    id: number;
    name: string;
    address?: string;

    // readonly properties
    readonly nib: string;
    readonly npwp: string;
}