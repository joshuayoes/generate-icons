import React from "react";
import { storiesOf } from "@storybook/react";
import Clock from "./Clock.tsx"; 
import Arrow from "./Arrow.tsx"; 
import Alert from "./Alert.tsx"; 

storiesOf("Icons", module)
  .add(
    "All Icons",
    () => {
      <ul>
        <li>
          <Clock color='#000' />
          Clock
        </li>
        <li>
          <Arrow color='#000' />
          Arrow
        </li>
        <li>
          <Alert color='#000' />
          Alert
        </li>
      </ul>
    }
  );