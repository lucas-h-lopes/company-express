export const toastType = {
	SUCCESS: "success",
	ERROR: "error",
};

let running = false;

export function generateToast(toast, hasImage = true) {
	if (hasImage) {
		const img = getToastImage(toast);

		img.onload = () => {
			img.style.order = -1;
			prepareToast(toast, img);
		};
		return;
	}
	prepareToast(toast);
}

function prepareToast(objToast, img) {
	if (!running) {
		running = true;
		const toast = document.createElement("div");

		toast.classList.add("toast");
		toast.classList.add(objToast.type);

		const text = document.createElement("p");
		text.innerText = objToast.message;

		toast.appendChild(text);
		if (img) {
			toast.appendChild(img);
		}

		document.body.appendChild(toast);

		setTimeout(() => {
			toast.style.animationName = "end";
			toast.addEventListener("animationend", () => {
				document.body.removeChild(toast);
				running = false;
			});
		}, objToast.duration);
	}
}

function getToastImage(toast) {
	const img = new Image();
	if (toast.type === toastType.ERROR) {
		img.src = "./img/warning.svg";
		img.alt = "ícone-alerta";
	}
	return img;
}
