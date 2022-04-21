import React, { createContext, createRef, Dispatch, Fragment, MutableRefObject, Ref, useCallback, useContext, useMemo, useReducer } from 'react'
import { useId } from '../../hooks/use-id';
import { useIsoMorphicEffect } from '../../hooks/use-iso-morphic-effect';
import { useSyncRefs } from '../../hooks/use-sync-refs';
import { match } from '../../utils/match';
import { forwardRefWithAs, render } from '../../utils/render'
import LoadingSpin from "react-loading-spin";

enum ActionTypes {

    SetDisabled,
    SetIsLoading,

    //newly addded
    SetToggle,

}

type Action =
    | { type: ActionTypes.SetDisabled, }
    | { type: ActionTypes.SetIsLoading, }
    | { type: ActionTypes.SetToggle, }


type State = {
    isLoading: boolean,
    disable: boolean,
    toggle: boolean,
    labelRef: React.MutableRefObject<HTMLLabelElement | null>
    // buttonRef: React.MutableRefObject<HTMLButtonElement | null>
    iconRef: React.MutableRefObject<HTMLLIElement | null>
}

let reducer = (state: State, action: Action): any => {
    return match(action.type, reducers, state, action)
}

let reducers: {
    [P in ActionTypes]: (
        state: State,
        action: Extract<Action, { type: P }>
    ) => State
} = {
    [ActionTypes.SetDisabled](state) {
        return { ...state, disable: !state.disable }
    },
    [ActionTypes.SetIsLoading](state) {
        return { ...state, isLoading: !state.isLoading }
    },
    [ActionTypes.SetToggle](state) {
        return { ...state, toggle: !state.toggle }
    }
}

// const ButtonContext = React.createContext<[State, React.Dispatch<Action>] | null | any>(null);

let ButtonContext = React.createContext<[State, React.Dispatch<Action>] | null>(null)
ButtonContext.displayName = 'ButtonContext'

function useButtonContext(component: string) {
    let context = React.useContext(ButtonContext)
    if (context === null) {
        let err = new Error(`<${component} /> is missing a parent <Listbox /> component.`)
        if (Error.captureStackTrace) Error.captureStackTrace(err, useButtonContext)
        throw err
    }
    return context
}

let DEFAULT_BUTTON_TAG = 'button' as const
interface ButtonRenderPropArg {
    // disabled: boolean
    toggle?: boolean,
    action?: any,
    open?: boolean
}


// let ButtonRoot = forwardRefWithAs(function ButtonRoot(props: {
//     disable?: boolean,
//     onClick?: React.MouseEventHandler<HTMLButtonElement>,
//     isLoading?: boolean,
//     name?: string,
//     value?:any,
//     children?:React.ReactNode // <-- strict API
//     // style?:React.ReactNode
// }, ref: React.Ref<any>
// ) {

let ButtonRoot = forwardRefWithAs(function ButtonRoot(props: any, ref: React.Ref<any>
) {
    let { value, name, isLoading = false, disable = false, toggle, ...theirProps } = props;

    let buttonMoleculeRef = useSyncRefs(ref)

    let reducerBag = React.useReducer(reducer, {
        isLoading,
        disable,
        toggle: false,
        // buttonRef: React.createRef(),
        labelRef: React.createRef(),
        iconRef: React.createRef(),
        propsRef: {
            current: {},
        },

    } as State)

    let [state, dispatch] = reducerBag;

    useIsoMorphicEffect(() => {
        // skip initial render
        return () => {

            // do something with dependency    
            dispatch({ type: ActionTypes.SetDisabled })
            dispatch({ type: ActionTypes.SetIsLoading })

        }
    }, [isLoading])

    useIsoMorphicEffect(() => {
        dispatch({ type: ActionTypes.SetToggle })
    }, [toggle])

    let ourProps = {
        ref: buttonMoleculeRef,
        disabled: props.disabled ? props.disabled : state.disable,
        style: state.disable ? { ...props.style, opacity: 0.6 } : props.style
    }

    let slot = null;
    let renderConfiguration = {
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_BUTTON_TAG,
        name: 'Button',
    }

    return (
        <ButtonContext.Provider value={reducerBag}>
            {
                render(renderConfiguration)
            }
        </ButtonContext.Provider>
    )


})

let DEFAULT_LABEL_TAG = 'label' as const
interface LabelRenderPropArg {
    disabled: boolean
}


let Label = forwardRefWithAs(function Label<
    TTag extends React.ElementType = typeof DEFAULT_LABEL_TAG

>(props: any, ref: React.Ref<HTMLLabelElement>,
) {
    let id = `headlessdyno-button-label-${useId()}`

    let { disable = false, } = props;
    let [state] = useButtonContext('Button.Label')

    let labelRef = useSyncRefs(state.labelRef, ref)


    let theirProps = props

    let ourProps = {
        ref: labelRef,
        id,
        children: state?.disable ? 'Loading' : props.children
        // onClick: handleClick 
    };

    let slot = null

    return render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_LABEL_TAG,
        name: 'Button.Label',
    })

})

let DEFAULT_ICON_TAG = 'i' as const
interface IconRenderPropArg {
    disabled: boolean
}

let Icon = forwardRefWithAs(function Icon<
    TTag extends React.ElementType = typeof DEFAULT_ICON_TAG

>(props: any, ref: React.Ref<HTMLLIElement>
) {

    let id = `headlessdyno-button-i-${useId()}`
    let [state] = useButtonContext('Button.Icon')

    let iconRef = useSyncRefs(state.iconRef, ref)

    let theirProps = props
    let ourProps = {
        ref: iconRef,
        id,
        children: state?.disable ? <LoadingSpin size={'medium'} /> : props.children

        // onClick: handleClick 
    };

    let slot = null

    return render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_ICON_TAG,
        name: 'Button.Icon',
    })

})

export default Object.assign(ButtonRoot, { Label, Icon })