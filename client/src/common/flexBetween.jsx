const { styled, Box } = require("@mui/material");

const flexBetween = styled(Box)(
    {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
);

export default flexBetween;