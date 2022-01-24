import Label from "../Label/Label";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Text from "../Textbox/Text";
import ErrorMessage from "../Label/ErrorMessage";
import Description from "../Label/Description";
import Tooltip from '@mui/material/Tooltip';

const Textbox = (props) => {
    const { label, error } = props;

    return (
        <>
            <div style={{ alignItems: "center", display: "flex" }}>

                <Label
                    value={label.label}
                    style={label.style}
                    className={label.className}
                />


            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Text
                    error="true"
                    placeholder={props.placeholder}
                    style={props.textStyle}

                />

                <Label
                    value={error?.label}
                    type='error'
                    style={error?.style}

                />
            </div>

        </>
    );
};

export default Textbox;