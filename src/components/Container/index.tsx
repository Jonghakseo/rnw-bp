import React from "react";
import { ContainerWrapper } from "./styles";
import { WithChildren } from "../../types/props";

interface Props extends WithChildren {
  testID?: string;
}

export function Container({ testID, children }: Props): React.ReactElement {
  return <ContainerWrapper testID={testID}>{children}</ContainerWrapper>;
}
