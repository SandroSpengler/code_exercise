import IEigenschaft from "./IEigenschaft";

export default interface IAppKonfiguration {
	id: number;
	tenantId?: number;
	bezeichnung: string;
	beschreibung: string;
	eigenschaften: IEigenschaft[];
}
