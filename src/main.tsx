import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import "./translations/i18n.ts";
import { ClerkProvider } from "@clerk/clerk-react";

// register all modules
ModuleRegistry.registerModules([AllCommunityModule]);

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
			<App />
		</ClerkProvider>
	</StrictMode>
);
