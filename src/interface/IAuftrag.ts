import IEigenschaft from "./IEigenschaft";

export default interface IAuftrag {
	id: number;
	tenantId?: number;
	bezeichnung: string;
	beschreibung: string;
	eigenschaften: IEigenschaft[];
}
