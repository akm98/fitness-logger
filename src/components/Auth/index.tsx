import {
	SignedIn,
	SignedOut,
	SignInButton,
	useAuth,
	UserButton,
} from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Auth = () => {
	const { t } = useTranslation();
	const { getToken } = useAuth();

	const [token, setToken] = useState<string | null>(null);

	getToken()
		.then((token) => {
			if (token) {
				setToken(token);
			}
		})
		.catch((error) => {
			console.log("🚀 ~ Auth ~ token:", error);

			sessionStorage.removeItem("SESSION_TOKEN");
		});

	useEffect(() => {
		if (token != null) sessionStorage.setItem("SESSION_TOKEN", token);
	}, [token]);
	return (
		<>
			<SignedOut>
				<SignInButton>
					<Button variant={"outline"}>{t("sign_in")}</Button>
				</SignInButton>
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</>
	);
};

export default Auth;
