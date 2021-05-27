import { containerMaxWidth, containerMaxWidthTablet } from './general'
import { xs, sm, md, lg, xl, xxl } from './breakpoints'

export const gridTheme = {
  gridColumns: 12,
  breakpoints: {
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
  },
  row: {
    padding: 10,
  },
  col: {
    padding: 10,
  },
  container: {
    padding: 20,
    maxWidth: {
      xxl: containerMaxWidth,
      xl: containerMaxWidth,
      lg: containerMaxWidthTablet,
      md: containerMaxWidthTablet,
      sm: 999,
      xs: 999,
    },
  },
}
