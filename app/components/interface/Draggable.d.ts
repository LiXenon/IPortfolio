export interface draggableProps {
    id: number,
    type?: string,
    value?: string,
    setValue?: (val: string) => void;
    x?: number,
    y?: number,
    style?: object,
    src?: string,
    link?: string,
    disabled?: boolean,
    setFocusedElementId?: (id: number) => void;
    handlePositionChange?: (x: number, y: number, id: number) => void;
}