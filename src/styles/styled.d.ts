import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainBackground: string;
    subColor: string;
    primaryText: string;
    secondaryText?: string;
    subBackground: string;
  }
}
