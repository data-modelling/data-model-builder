/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useTheme, extendTheme, ChakraProvider } from "@chakra-ui/react";
//import appTheme from "../theme";
import { theme } from "@builder/lib";
/*
const theme = extendTheme({
  test: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
 
});
*/

console.log("TEST THEME ", theme);

export default {
  title: "Test2",
};

export const test2 = () => {
  const theme2 = useTheme();
  console.log("USE THEME ", theme2);
  return <div> Something 2 </div>;
};

test2.storyName = "Test2";

test2.decorators = [
  Story => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];

/*
test2.story = {
  name: "Test2",
};

export const Basic = () => <Button />
Basic.storyName = 'foo';
Basic.parameters = { ... };
Basic.decorators = [ ... ];

export const decorators = [
  Story => (
    <StyledTemplate>
      <Story />
    </StyledTemplate>
  ),
]

*/
