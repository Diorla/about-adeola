import { Header } from "styled-components";
import breakpoints from "../../theme/breakpoints";
import elevation from "../../theme/elevation";
import palette from "../../theme/palette";
import priority from "../../theme/priority";

const styles: Header = {
  link: {
    color: palette.primary.main,
    cursor: "url(/cursor/pointer.svg), pointer",
    padding: "4px",
    margin: "4px",
  },
  logo: {
    fontFamily: '"Oleo Script", cursive',
    fontSize: "24px",
    textDecoration: "none",
    margin: "0",
    padding: "0",
  },
  contact: {
    backgroundColor: palette.primary.main,
    borderRadius: "4px",
    textAlign: "center",
    hoverColor: palette.primary.light,
    color: palette.primary.text,
    textDecoration: "none",
  },
  main: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    alignItems: "center",
    position: "fixed",
    top: 0,
    zIndex: priority.header,
    backgroundColor: "white",
    boxShadow: elevation[1],
    breakpoint: breakpoints.md,
    mdDirection: "column",
    mdJustifyContent: "space-evenly",
    mdPosition: "absolute",
    width: "100%",
  },
};

export default styles;
