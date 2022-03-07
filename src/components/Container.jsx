
const Container = ({className,children}) => {
    return(
        <div className={`${className} _container`}>
            {children}    
        </div>
    )
}
export default Container;