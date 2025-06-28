import React from "react";

type ShowProps = {
	condition: boolean;
	children: React.ReactNode;
};

export const If: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<>{children}</>
);
export const Else: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<>{children}</>
);

const Show: React.FC<ShowProps> = (props: ShowProps) => {
	const { condition, children } = props; 
	let ifContent: React.ReactNode = null;
	let elseContent: React.ReactNode = null;
 
	React.Children.forEach(children, (child) => {
		if (!React.isValidElement(child)) return;
		if (child.type === If) {
			ifContent = child;
		} else {
			elseContent = child;
		}
	});

	if (condition) {
		return <>{ifContent}</>;
	}

	return <>{elseContent}</>;
};

export default Show;
