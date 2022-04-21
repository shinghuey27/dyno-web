import React, { createContext, createRef, Dispatch, Fragment, MutableRefObject, Ref, useContext, useMemo, useReducer } from 'react'
import { useDisposables } from '../../hooks/use-disposables';
import { useId } from '../../hooks/use-id';
import { useIsoMorphicEffect } from '../../hooks/use-iso-morphic-effect';
import { useResolveButtonType } from '../../hooks/use-resolve-button-type';
import { useSyncRefs } from '../../hooks/use-sync-refs';
import { VisuallyHidden } from '../../internal/visually-hidden';
import { objectToFormEntries } from '../../utils/form';
import { match } from '../../utils/match';
import { compact, forwardRefWithAs, render } from '../../utils/render'

enum ActionTypes {
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
    buttonRef: MutableRefObject<HTMLButtonElement | null>    
    disabled: boolean
}


let SampleComponentContext = createContext<[StateDefinition, Dispatch<Actions>] | null>(null)
SampleComponentContext.displayName = 'SampleComponentContext';

function useSampleComponentContext(component: string) {
    let context = useContext(SampleComponentContext)
    if (context == null) {
        let err = new Error(`<${component} /> is missing a parent <SampleComponent /> component.`)
        if (Error.captureStackTrace) Error.captureStackTrace(err, useSampleComponentContext)
        throw err
    }
    return context;
}

function stateReducer(state: any, action: any) {
    return match(action.type, reducers, state, action)
}

// --------------- SampleComponentRoot ------------------

let DEFAULT_SAMPLE_COMPONENT_TAG = Fragment

interface SampleComponentRenderPropArg {
    disabled: boolean
}

let SampleComponentRoot = forwardRefWithAs(function SampleComponent(props: any, ref: any) {

    let { value, name, onChange, disabled = false, horizontal = false, ...theirProps } = props;

    let sampleComponentRef = useSyncRefs(ref)

    let reducerBag = useReducer(stateReducer, {
        propsRef: {
            current: { value, onChange },
        },
        labelRef: createRef(),
        buttonRef: createRef(),
        disabled,

    } as StateDefinition)

    let [{ propsRef, buttonRef, labelRef }, dispatch] = reducerBag

    propsRef.current.value = value;

    useIsoMorphicEffect(() => dispatch({ type: ActionTypes.SetDisabled, disabled }), [disabled])

    let slot = useMemo<SampleComponentRenderPropArg>(
        () => ({ disabled }),
        [disabled]
    )

    let ourProps = { ref: sampleComponentRef }

    let renderConfiguration = {
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_SAMPLE_COMPONENT_TAG,
        name: 'SampleComponent',
    }

    return (
        <SampleComponentContext.Provider value={reducerBag}>
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
        </SampleComponentContext.Provider>
    )
})

// --------------- SampleComponentRoot end ------------------

// --------------- Button ------------------

let DEFAULT_BUTTON_TAG = 'button' as const

interface ButtonRenderPropArg {
    disabled: boolean
}

let Button = forwardRefWithAs(function Button(props: any, ref: any) {

    let [state, dispatch] = useSampleComponentContext('SampleComponent.Button')

    let buttonRef = useSyncRefs(state.buttonRef, ref)

    let id = `headlessui-samplecomponent-button-${useId()}`
    let d = useDisposables();

    // let handleClick = useCallback(
    //     (event: ReactMouseEvent) => {
    //       if (isDisabledReactIssue7711(event.currentTarget)) return event.preventDefault()
    //       if (state.listboxState === ListboxStates.Open) {
    //         dispatch({ type: ActionTypes.CloseListbox })
    //         d.nextFrame(() => state.buttonRef.current?.focus({ preventScroll: true }))
    //       } else {
    //         event.preventDefault()
    //         dispatch({ type: ActionTypes.OpenListbox })
    //       }
    //     },
    //     [dispatch, d, state]
    //   )

    let slot = useMemo<ButtonRenderPropArg>(
        () => ({ disabled: state.disabled }),
        [state]
    )

    let theirProps = props

    let ourProps = {
        ref: buttonRef,
        id,
        type: useResolveButtonType(props, state.buttonRef),
        'aria-haspopup': true,
        // 'aria-controls': state.optionsRef.current?.id,
        // 'aria-expanded': state.disabled ? undefined : state.listboxState === ListboxStates.Open,
        // 'aria-labelledby': labelledby,
        disabled: state.disabled,
        // onKeyDown: handleKeyDown,
        // onKeyUp: handleKeyUp,
        // onClick: handleClick,
    }

    return render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_BUTTON_TAG,
        name: 'SampleComponent.Button',
    })

})

// --------------- Button end ------------------

export let SampleComponent = Object.assign(SampleComponentRoot, {
    Button,
    // label 
})