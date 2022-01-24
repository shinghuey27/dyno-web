import Label from "../Label/Label";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Text from "../Textbox/Text";
import ErrorMessage from "../Label/ErrorMessage";
import Description from "../Label/Description";
import Tooltip from '@mui/material/Tooltip';

const TextboxDynoSH = (props) => {
    return (
        <>
            <div style={{ alignItems: 'center', display: 'flex' }}>
                <Label value="abc" />
                <Tooltip title="help" style={{}}>
                    <HelpOutlineIcon fontSize="10px" style={{ marginLeft: 5 }} />
                </Tooltip>
            </div>
            <Text />
            <div>
                <Description value="click here" {...props} />
            </div>
            <div>
                <ErrorMessage value="error occurs" />
            </div>
        </>
    );
};

export default TextboxDynoSH;