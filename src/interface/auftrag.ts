import IEigenschaft from "./eigenschaft";

export default interface IAuftrag {
	id: number;
	bezeichnung: string;
	beschreibung: string;
	eigenschaften: IEigenschaft[];
}
