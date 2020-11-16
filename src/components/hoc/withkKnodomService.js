import React from "react";
import KinodomServiceContext from "../KinodomServiceContext";

const WithKinodomService = () => (Wrapped) => {
	return (props) => {
		return (
			<KinodomServiceContext.Consumer>
				{(KinodomService) => {
					return <Wrapped {...props} KinodomService={KinodomService} />;
				}}
			</KinodomServiceContext.Consumer>
		);
	};
};

export default WithKinodomService;
