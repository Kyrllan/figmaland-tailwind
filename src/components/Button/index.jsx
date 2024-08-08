

export const Button = ({children, variant = 'primary', isBold = false}) => {
    return <button className={`flex items-center justify-center p-4 rounded-[35px] font-Graphik text-xl leading-5 ${variant === 'primary' ? 'bg-primary text-white' : 'bg-white text-primary'} ${isBold ? 'font-GraphikBold' : ''} transition hover:brightness-90`}>{children}</button>
}