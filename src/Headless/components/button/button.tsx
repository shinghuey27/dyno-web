import React, {
    // Types
    Dispatch,
    ElementType,
    KeyboardEvent as ReactKeyboardEvent,
    MouseEvent as ReactMouseEvent,
    MutableRefObject,
    Ref,

} from 'react'

import { useId } from '../../hooks/use-id'
import { useSyncRefs } from '../../hooks/use-sync-refs'
import { Props } from '../../types'
import { forwardRefWithAs, render } from '../../utils/render'

// --- pure button component -----

let DEFAULT_BUTTON_TAG = 'button' as const

interface ButtonRenderPropArg {
    // disabled: boolean
}

type ButtonPropsWeControl =
    | 'id'


let ButtonRoot = forwardRefWithAs(function Button<TTag extends ElementType = typeof DEFAULT_BUTTON_TAG>(
    props: Props<TTag,
        // ButtonRenderPropArg,
        ButtonPropsWeControl>,
    ref: Ref<HTMLButtonElement>
) {
    // let [state, dispatch] = useButtonRootContext('ButtonRoot.Button') 
    //<-- we are not using useReducers since there is no state to keep track

    let buttonRef = useSyncRefs(ref)

    let id = `headless-my-button-${useId()}`

    let slot = null
    let theirProps = props
    let ourProps = {
        ref: buttonRef,
        id,
    }

    return render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_BUTTON_TAG,
        name: 'Button',
    })
})

// ---

export let Button = Object.assign(ButtonRoot)