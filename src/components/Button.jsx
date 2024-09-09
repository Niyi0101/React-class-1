export const PrimaryButton = ({children, clicks}) => {
    return (
        <button style={{backgroundColor: "green", color: "white"}} onClick={clicks}>{children}</button>
    )
}

export const SecondaryButton = ({children, clicks}) => {
    return (
        <button style={{backgroundColor: "yellow", color: "white"}} onClick={clicks}>{children}</button>
    )
}