export const tokensDark = {
    primary: {
        // black
        100: "#cecfd8",
        200: "#9d9fb0",
        300: "#6b7089",
        400: "#3a4061",
        500: "#09103a",
        600: "#070d2e",
        700: "#050a23",
        800: "#040617",
        900: "#02030c"
    },

    secondary: {
        // indigo
        100: "#dee1f2",
        200: "#bdc2e6",
        300: "#9ba4d9",
        400: "#7a85cd",
        500: "#5967c0",
        600: "#47529a",
        700: "#353e73",
        800: "#24294d",
        900: "#121526"
    },

    neutral: {
        // yellow
        100: "#f7f7f7",
        200: "#f0f0f0",
        300: "#e8e8e8",
        400: "#e1e1e1",
        500: "#d9d9d9",
        600: "#aeaeae",
        700: "#828282",
        800: "#575757",
        900: "#2b2b2b"
    },
    white: {
        // white
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#333333"
    },
};
function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObj = {};
        for (let i = 0; i < length; i++) {
            reversedObj[keys[i]] = values[i];
        }
        reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            palette: {
                mode: 'light',
                primary: {
                    ...tokensLight.primary,
                    main: tokensLight.primary[500], // Adjust shade as necessary
                    light: tokensLight.primary[300], // Adjust shade as necessary
                },
                secondary: {
                    ...tokensLight.secondary,
                    main: tokensLight.secondary[500], // Adjust shade as necessary
                    light: tokensLight.secondary[300], // Adjust shade as necessary
                },
                neutral: {
                    ...tokensLight.neutral,
                    main: tokensLight.neutral[500], // Adjust shade as necessary
                },
                background: {
                    default: tokensLight.primary[100], // Adjust shade as necessary
                    alt: tokensLight.primary[50], // Adjust shade as necessary
                },
            },
        },

        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 14,
            },
        },

    }
}


