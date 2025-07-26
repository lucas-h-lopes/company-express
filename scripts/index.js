import { toastType, generateToast } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
	const register = document.querySelector(".register");
	const signIn = document.querySelector(".sign-in");
	const buttons = document.getElementsByClassName("details");

	const toastMessage = "Opa! Essa funcionalidade não faz parte da versão atual.";
	const toastDuration = 3000;

	register.addEventListener("click", (event) => {
		event.preventDefault();
		generateToast(toastMessage, toastDuration, toastType.ERROR);
	});

	signIn.addEventListener("click", (event) => {
		event.preventDefault();
		generateToast(toastMessage, toastDuration, toastType.ERROR);
	});

	Array.from(buttons).forEach((e) => {
		e.addEventListener("click", (event) => {
			event.preventDefault();
			generateToast(toastMessage, toastDuration, toastType.ERROR);
		});
	});
});
