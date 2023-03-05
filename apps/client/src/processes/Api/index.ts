// README: Интерфейс для управления всем приложением

import * as Task from "features/Task";

const features = {
	Task,
}

declare global {
	interface Window {
		api: any;
	}
}

window.api = features || {};
