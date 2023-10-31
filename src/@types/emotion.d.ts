import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      background: {
        primary: string
        secondary: string
        highlight: string
      }
      text: {
        main: string
        secondary: string
      }
      icon: {
        black: string
        white: string
      }
    }
    font: {
      body1: {
        fontFamily: string
        fontSize: string
        fontWeight: string
      }
      body2: {
        fontFamily: string
        fontSize: string
        fontWeight: string
      }
      body3: {
        fontFamily: string
        fontSize: string
        fontWeight: string
      }
      body4: {
        fontFamily: string
        fontSize: string
        fontWeight: string
      }
      body5: {
        fontFamily: string
        fontSize: string
        fontWeight: string
      }
      heading: {
        fontFamily: string
        fontSize: string
      }
    }
  }
}
