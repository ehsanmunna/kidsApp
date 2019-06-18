import { Font, Color } from "./_veriables";

const _TextBold = {
    fontWeight: Font.fontWeight
  }

const TextCSS = {
    TextBold: _TextBold
    , QuestionText: {
        color: Color.green
        , margin: 5
        , ..._TextBold
    }
    , TextSymbol: {
        fontSize: 24,
        margin: 10,
        ..._TextBold
    }
  }

  export { TextCSS };