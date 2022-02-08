const breakpoints = {
  xs: 400,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

export function getColumns(width) {
  if (width < breakpoints.xs) {
    return 1
  } else if (width < breakpoints.sm) {
    return 2
  } else if (width < breakpoints.md) {
    return 3
  } else if (width < breakpoints.lg) {
    return 4
  } else if (width < breakpoints.xl) {
    return 5
  } else {
    return 6
  }
}
