import 'styled-components'
import { DefaultTheme } from '../styles/themes/Default'

type ThemeType = typeof DefaultTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
