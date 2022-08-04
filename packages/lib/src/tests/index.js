import React from "react";
// import styled from "@emotion/styled";
import { css } from "@chakra-ui/styled-system";

const theme = {
  direction: "rtl", // ltr | rtl
};

// without theme,... this returns function
const styles = css({
  mt: "40px",
  // bi-directional `margin-right`
  // `margin-right` in ltr, `margin-left` in rtl
  mrBidi: "30px",
})(theme);

// console.log("THEME ", theme);
// console.log("STYLES ", styles);

const One = () => {
  return <div>Test</div>;
};

export { One };
