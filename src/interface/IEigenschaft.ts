import { datentyp } from "../typ/datentyp";

export default interface IEigenschaft {
	id: number;
	beschreibung: string;
	datentyp: datentyp;
}
