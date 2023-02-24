import "styled-components";

declare module "styled-components" {
  /**
   * Styles for each font, namely size, colour and weight
   */
  export interface Font {
    /**
     * Represents the biggest thing on the page
     * The title of each division
     */
    headerOne: string;
    /**
     * Second biggest thing on the page
     * The title of sub-division
     */
    headerTwo: string;
    /**
     * Looking for something big
     * The title of level 3 division
     */
    headerThree: string;
    /**
     * Text below any of the three headers
     */
    subHeader: string;
    /**
     * Used all over as the default size of text
     */
    text: string;
    /**
     * A smaller text, used for things like captions, description etc
     */
    subText: string;
    /**
     * Stylish font
     */
    cursive: string;
  }

  /**
   * All the colours needed
   */
  export interface Color {
    /**
     * Main colour of the app
     */
    primary: string;
    primaryDark: string;
    primaryLight: string;
    /**
     * Alternative colour, to provide contrast
     */
    secondary: string;
    secondaryDark: string;
    secondaryLight: string;
    /**
     * Third variant of colour, good for providing neutral backgrounds or dividers
     */
    shade: string;
    shadeDark: string;
    shadeLight: string;
  }
}
