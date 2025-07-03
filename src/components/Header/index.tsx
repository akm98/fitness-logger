import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from "@clerk/clerk-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import Show, { Else, If } from "../Show";

type Props = {
	showFitnessLog: boolean;
	setShowFitnessLog: (show: boolean) => void;
};

const Header = (props: Props) => {
	const { showFitnessLog, setShowFitnessLog } = props;
	const { t } = useTranslation();
	return (
		<header className='flex flex-row-reverse items-center justify-end pt-4 px-4'>
			<div id='auth'>
				<SignedOut>
					<SignInButton>
						<Button variant={"outline"}>{t("sign_in")}</Button>
					</SignInButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
			<div className='flex items-center-safe justify-between w-full '>
				<div className='px-2 '>
					<p className='font-bold text-2xl'>{t("fitness_logger")}</p>
					<p>{t("track_your_fitness_progress")} </p>
				</div>
				<div className='mx-4'>
					<Button onClick={() => setShowFitnessLog(!showFitnessLog)}>
						<Show condition={showFitnessLog}>
							<If>{t("log_fitness_data")}</If>
							<Else>{t("show_my_fitness_data")}</Else>
						</Show>
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
