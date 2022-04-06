import React, { createContext, createRef, Dispatch, Fragment, MutableRefObject, Ref, useCallback, useContext, useMemo, useReducer } from 'react'
import { useDisposables } from '../../hooks/use-disposables';
import { useId } from '../../hooks/use-id';
import { useIsoMorphicEffect } from '../../hooks/use-iso-morphic-effect';
import { useResolveButtonType } from '../../hooks/use-resolve-button-type';
import { useSyncRefs } from '../../hooks/use-sync-refs';
import { VisuallyHidden } from '../../internal/visually-hidden';
import { objectToFormEntries } from '../../utils/form';
import { match } from '../../utils/match';
import { compact, forwardRefWithAs, render } from '../../utils/render'

enum ButtonMoleculeStates {
    OnHover,
    OffHover, 
    isLoading    
  }

enum ActionTypes {
    MouseOnHoverToggle,    
    SetDisabled,    
}

type Actions =
    | { type: ActionTypes.SetDisabled; disabled: boolean }

let reducers = {
    [ActionTypes.SetDisabled](state: any, action: any) {
        if (state.disabled === action.disabled) return state
        return { ...state, disabled: action.disabled }
    },
}

interface StateDefinition {
    propsRef: MutableRefObject<{ value: unknown; onChange(value: unknown): void; }>
    labelRef: MutableRefObject<HTMLLabelElement | null>
    iconRef: MutableRefObject<HTMLLabelElement | null>
    buttonRef: MutableRefObject<HTMLButtonElement | null>
    
    disabled: boolean,    
    buttonMoleculeState:ButtonMoleculeStates,
    orientation: 'horizontal' | 'vertical'
}


let ButtonMoleculeContext = createContext<[StateDefinition, Dispatch<Actions>] | null>(null)
ButtonMoleculeContext.displayName = 'ButtonMoleculeContext';

function useButtonMoleculeContext(component: string) {
    let context = useContext(ButtonMoleculeContext)
    if (context == null) {
        let err = new Error(`<${component} /> is missing a parent <ButtonMolecule /> component.`)
        if (Error.captureStackTrace) Error.captureStackTrace(err, useButtonMoleculeContext)
        throw err
    }
    return context;
}

function stateReducer(state: any, action: any) {
    return match(action.type, reducers, state, action)
}

// --------------- ButtonMoleculeRoot ------------------

let DEFAULT_BUTTON_MOLECULE_TAG = 'button' as const

interface ButtonMoleculeRenderPropArg {
    disabled: boolean
}

let ButtonMoleculeRoot = forwardRefWithAs(function ButtonMolecule(props: any, ref: any) {

    let { value, name, onChange, disabled = false, horizontal = false, ...theirProps } = props;

    let buttonMoleculeRef = useSyncRefs(ref)

    let reducerBag = useReducer(stateReducer, {
        propsRef: {
            current: { value, onChange },
        },
        labelRef: createRef(),
        buttonRef: createRef(),
        iconRef: createRef(),
        disabled,

    } as StateDefinition)

    let [{ propsRef, buttonRef, labelRef }, dispatch] = reducerBag

    propsRef.current.value = value;

    useIsoMorphicEffect(() => dispatch({ type: ActionTypes.SetDisabled, disabled }), [disabled])

    let slot = useMemo<ButtonMoleculeRenderPropArg>(
        () => ({ disabled }),
        [disabled]
    )

    let ourProps = { ref: buttonMoleculeRef }

    let renderConfiguration = {
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_BUTTON_MOLECULE_TAG,
        name: 'ButtonMolecule',
    }

    return (
        <ButtonMoleculeContext.Provider value={reducerBag}>
            {name != null && value != null ? (
                <>
                    {objectToFormEntries({ [name]: value }).map(([name, value]) => (
                        <VisuallyHidden
                            {...compact({
                                key: name,
                                as: 'input',
                                type: 'hidden',
                                hidden: true,
                                readOnly: true,
                                name,
                                value,
                            })}
                        />
                    ))}
                    {render(renderConfiguration)}
                </>
            ) : (
                render(renderConfiguration)
            )}
        </ButtonMoleculeContext.Provider>
    )
})

// --------------- ButtonMoleculeRoot end ------------------

// --------------- Label ------------------

let DEFAULT_LABEL_TAG = 'label' as const

interface LabelRenderPropArg {
    // disabled: boolean
}

let Label = forwardRefWithAs(function Label(props: any, ref: any) {

    let [state, dispatch] = useButtonMoleculeContext('ButtonMolecule.Label')

    let labelRef = useSyncRefs(state.labelRef, ref)

    let id = `headless-label-button-${useId()}`

    let handleClick = useCallback(
        () => state.buttonRef.current?.focus({ preventScroll: true }),
        [state.buttonRef]
    )

    let slot = useMemo<LabelRenderPropArg>(
        () => ({ disabled: state.disabled }),
        [state]
    )
    let theirProps = props

    let ourProps = { ref: labelRef, id, onClick: handleClick }

    return render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_LABEL_TAG,
        name: 'ButtonMolecule.Label',
    })

})

// --------------- Label end ------------------

// --------------- Icon ------------------

let DEFAULT_ICON_TAG = 'i' as const

interface IconRenderPropArg {
    // disabled: boolean
}

let Icon = forwardRefWithAs(function Icon(props: any, ref: any) {

    let [state, dispatch] = useButtonMoleculeContext('ButtonMolecule.Label')

    let iconRef = useSyncRefs(state.iconRef, ref)

    let id = `headless-icon-button-${useId()}`

    let handleClick = useCallback(
        () => state.buttonRef.current?.focus({ preventScroll: true }),
        [state.buttonRef]
    )

    let slot = useMemo<IconRenderPropArg>(
        () => ({ disabled: state.disabled }),
        [state]
    )
    let theirProps = props

    let ourProps = { ref: iconRef, id, onClick: handleClick }

    return render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_ICON_TAG,
        name: 'ButtonMolecule.Icon',
    })

})

// --------------- Icon end ------------------

export let ButtonMolecule = Object.assign(ButtonMoleculeRoot, {    
    Label,
    Icon
})