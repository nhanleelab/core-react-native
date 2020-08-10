import { keyMirror } from "utils/keyMirror";

export const nameRegExp = /^[a-zA-Z0-9]+$/;
export const emailRegExp = /\S+@\S+\.\S+/;
export const passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


export const RouteName = {
	LOGIN:"LOGIN",
	SIGN_UP:"SIGNUP",
	OTP: "OTP",
	APP:"APP"
}
export const FieldName = {

	EMAIL: "EMAIL",
	PASSWORD:"PASSWORD",
	RE_PASSWORD:"RE_PASSWORD",
	ADDRESS:'ADDRESS',
	PHONENUMBER:'PHONENUMBER',
	REGISTER:'REGISTER',
	FULLNAME: 'FULLNAME',
	BIRTHDAY:'BIRTHDAY',
	PASSPORT: 'PASSPORT',
	GENDER:'GENDER',
	ORGANIZATION:'ORGANIZATION',
	TAX:'TAX',
	AGENT:'AGENT'
}
export const AppPlaceHolder = {
	PLACE_HOLDER_EMAIL:'PLACE_HOLDER_EMAIL',
	PLACE_HOLDER_PASSWORD: 'PLACE_HOLDER_PASSWORD',
	PLACE_HOLDER_RE_PASSWORD: 'PLACE_HOLDER_RE_PASSWORD',
}
export const AppValidation = {


}

export interface UserModel {
	"id": string,
	"firstName": string,
	"lastName": string,
	"email": string,
	"isActive": boolean,
	"activateToken": string,
	"phoneNumber": string,
	"departments": Array<string>,
	"roles": Array<number>,
	"isApproved": number,

	"uid": number,
	"name": string,
	"subcontractorName": string,
	"status": string,
	"avatar"?: string,
	"fcmToken"?: string
}