"use client";

import { useCallback, useState } from "react";

const useIsAuthorzied = () => {
  const [isAuthorzied, setAuthorized] = useState(false);

  // stable link, because we do not know where we will use it
  const switchAuthorized = useCallback(() => {
    setAuthorized((currentValue) => !currentValue);
  }, []);

  return { isAuthorzied, switchAuthorized };
};

const UnAuthorizedComponent = () => {
  return <div>Только для не авторизованных</div>;
};

const AuthorizedComponent = () => {
  return <div>Только для авторизованных</div>;
};

/**
  * TODO: https://react-typescript-cheatsheet.netlify.app/docs/hoc/react_hoc_docs
  * wrap the display name for easy debugging()
  * type HOC
*/

// can use for feature toogle
// const withFeature = ({ FeatureOn, FeatureOff, featureName }) => {}

const withAuthorize = ({ Authorized, UnAuthorized }) => {
  return function WithAuthorizeComponent(props) {

    return props.isAuthorzied ? (
      <Authorized {...props} />
    ) : (
      <UnAuthorized {...props} />
    );
  };
};

const CustomComponent = withAuthorize({
  Authorized: AuthorizedComponent,
  UnAuthorized: UnAuthorizedComponent,
});

export default function Hoc() {
  const { isAuthorzied, switchAuthorized } = useIsAuthorzied();

  return (
    <div>
      <button onClick={switchAuthorized}>
        {isAuthorzied ? "LogOut" : "Login"}
      </button>
      <CustomComponent isAuthorzied={isAuthorzied} />
    </div>
  );
};
