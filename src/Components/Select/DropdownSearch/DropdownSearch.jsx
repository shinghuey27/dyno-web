import * as React from 'react';
import PropTypes from 'prop-types';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Label from '../../Label/Label'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Root = styled('div')(
    ({ theme }) => `
  color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
        };
  font-size: 14px;
`,
);

// const Label = styled('label')`
//   padding: 0 0 4px;
//   line-height: 1.5;
//   display: block;
// `;

const InputWrapper = styled('div')(
    ({ theme }) => `
  width: 300px;
  border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  border-radius: 30px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : 'rgb(1, 204, 206)'};
  }

  &.focused {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : 'rgb(1, 204, 206)'};
    
  }

  & input {
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : 'transparent'};
    color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
        };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`,
);

function Tag(props) {
    const { label, onDelete, ...other } = props;
    return (
        <div {...other}>
            <span>{label}</span>
            <CloseIcon onClick={onDelete} />
        </div>
    );
}

Tag.propTypes = {
    label: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
    ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;  

  line-height: 22px;
  background-color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'transparent'
        };
  
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`,
);

const Listbox = styled('ul')(
    ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  padding-top:10px;
  position: absolute;    
  list-style: none;
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  overflow: auto;
  max-height: 250px;
  
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
    font-weight: 600;

    // & svg {
    //   color: #1890ff;
    // }
  }

  & li[data-focus='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    cursor: pointer;
    

    & svg {
      color: currentColor;
    }
  }
`,
);

const renderItem = (dropdownType, index, option) => {
    switch (dropdownType) {
        case '2':

            return (
                <>
                    <img style={{ height: 20, marginRight: 20 }} src={require(`../../../Asset/Logo/${index + 1}.png`)} />
                    <span>{option.title}</span>
                    <CheckIcon fontSize="small" />
                </>)

        case '3':
            return (
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1, }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <span >{option?.title}</span>
                        <span >{option?.accNo}</span>
                    </div>
                    <span style={{ flex: 1, textAlign: 'end', marginRight: 0, paddingRight: 0 }}>RM {option?.balance}</span>
                    <CheckIcon fontSize="small" />
                </div>)

        default:
            return (
                <>
                    <span>{option.title}</span>
                    <CheckIcon fontSize="small" />
                </>)
    }
}

export default function DropdownSearch({ listOptions, label, dropdownType, containerStyle }) {
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getTagProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
        value,
        focused,
        setAnchorEl,
    } = useAutocomplete({
        id: 'customized-hook-demo',
        defaultValue: [listOptions[1]],
        multiple: true,
        options: listOptions,
        getOptionLabel: (option) => option.title,
        label: label,
        dropdownType: '1'
    });

    return (
        <Root style={{ ...containerStyle }}>
            <div {...getRootProps()}>
                <Label value={label} ></Label>
                <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                    {value.map((option, index) => (
                        <StyledTag label={option.title} {...getTagProps({ index })} />
                    ))}

                    <input {...getInputProps()} />
                    <ArrowDropDownIcon style={{ marginTop: 4 }} />
                </InputWrapper>
            </div>
            {groupedOptions.length > 0 ? (
                <Listbox {...getListboxProps()}>
                    {groupedOptions.map((option, index) => {
                        return (
                            <li {...getOptionProps({ option, index })}>
                                {renderItem(dropdownType, index, option)}
                            </li>
                        )
                    })}
                </Listbox>
            ) : null}
        </Root>
    );
}


