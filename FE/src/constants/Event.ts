import {FormEvent, ChangeEvent, MouseEvent } from "react"

export type SubmitEvent = FormEvent<HTMLFormElement>
export type InputEvent = ChangeEvent<HTMLInputElement>
export type ClickEvent = MouseEvent<HTMLButtonElement>