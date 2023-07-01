import IEigenschaft from "./eigenschaft";

export default interface IAppKonfiguration {
	id: number;
	tenantId?: number;
	bezeichnung: string;
	beschreibung: string;
	eigenschaften: IEigenschaft[];
}
