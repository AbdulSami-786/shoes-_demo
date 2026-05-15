module.exports = {
  theme: {
    extend: {
      animation: {
        gradient: "gradient 12s ease infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
      },

      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },

        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-25px)",
          },
        },
      },
    }
  }
};