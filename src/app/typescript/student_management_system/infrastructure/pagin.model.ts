export interface PaginModel {
    skip: number;
    take: number;
    orderBy: boolean | undefined;
    orderByTerm: string | undefined;
    searchByTerm: string | undefined;
}