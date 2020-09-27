module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-custom-media": {
      importFrom: [
        {
          customMedia: {
            "--m": "(min-width: 480px)",
          },
        },
        {
          customMedia: {
            "--t": "(min-width: 760px)",
          },
        },
        {
          customMedia: {
            "--d": "(min-width: 1040px)",
          },
        },
      ],
    },
  },
};
