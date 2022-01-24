import Label from "../Label/Label";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Text from "../Textbox/Text";
import ErrorMessage from "../Label/ErrorMessage";
import Description from "../Label/Description";
import Tooltip from '@mui/material/Tooltip';

const TextboxDynoSH = (props) => {
    return (
        <>
            <div style={{ alignItems: "center", display: "flex" }}>
                <Label
                    value={props.labelText}
                    style={props.labelStyle}
                    className={props.labelClassName}
                />
                <Tooltip title={props.tooltipText} style={{}}>
                    <HelpOutlineIcon fontSize="10px" style={{ marginLeft: 5 }} />
                </Tooltip>
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
                <Text
                    error="true"
                    placeholder={props.placeholder}
                    style={props.textStyle}

                />

                <Label
                    value={props.labelText}
                    type='desc'
                    style={props.labelStyle}
                    className={props.labelClassName}
                />


                <Label
                    value={props.labelText}
                    type='error'
                    style={props.labelStyle}
                    className={props.labelClassName}
                />
            </div>

        </>
    );
};

export default TextboxDynoSH;