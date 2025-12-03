import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

import App from "./app/App"
import "./main.scss"

library.add(faCircleUser, faRightFromBracket)

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
)