module.exports = {
    plugins: [
      "removeDimensions",
      {
        name: "removeAttrs",
        params: {
          attrs: "(fill|stroke)"
        }
      }
    ]
  }
  