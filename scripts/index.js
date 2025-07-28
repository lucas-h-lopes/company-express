import { toastType, generateToast } from "./utils.js";

const errorToast = {
	message: "Opa! Essa funcionalidade não faz parte da versão atual.",
	duration: 3000,
	type: toastType.ERROR,
};

document.addEventListener("DOMContentLoaded", () => {
	const register = document.querySelector(".register");
	const signIn = document.querySelector(".sign-in");
	const buttons = document.getElementsByClassName("details");

	register.addEventListener("click", (event) => {
		event.preventDefault();
		generateToast(errorToast);
	});

	signIn.addEventListener("click", (event) => {
		event.preventDefault();
		generateToast(errorToast);
	});

	Array.from(buttons).forEach((e) => {
		e.addEventListener("click", (event) => {
			event.preventDefault();
			generateToast(errorToast);
		});
	});
});
