import React from "react";

export const Slot = ({ children, ...p }: React.PropsWithChildren) => {
	if (React.Children.count(children) > 1) {
		return null;
	}
	if (React.isValidElement(children)) {
		return React.cloneElement(children, Object.assign(p, children.props));
	}
};
