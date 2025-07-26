export const toastType = {
	SUCCESS: "success",
	ERROR: "error",
};

let running = false;

function prepareToast(message, duration, type, img) {
	if (!running) {
		running = true;
		const toast = document.createElement("div");

		toast.classList.add("toast");
		toast.classList.add(type);

		const text = document.createElement("p");
		text.innerText = message;

		toast.appendChild(text);
		toast.appendChild(img);

		document.body.appendChild(toast);

		setTimeout(() => {
			toast.style.animationName = "end";
			toast.addEventListener("animationend", () => {
				document.body.removeChild(toast);
				running = false;
			});
		}, duration);
	}
}

export function generateToast(message, duration = 3000, type = toastType.SUCCESS) {
	let img = new Image();

	if (type === toastType.ERROR) {
		img.src = "./img/warning.svg";
		img.alt = "ícone-alerta";
	}
	img.onload = () => {
		img.style.order = -1;
		prepareToast(message, duration, type, img);
	};
}
