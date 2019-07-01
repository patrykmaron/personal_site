export default props => {
    
    const [ open, setOpen ] = React.useState(false);
   
    
    
    return(
        <div className="__accordion-main" onClick={open ? ()=>setOpen(false) : ()=>setOpen(true)}>          
            <h1 className="__accordion-title">{props.Title}</h1>
            <div className={`__accordion-content ${open ? `is-open`: ``}`} dangerouslySetInnerHTML={ {__html:props.children}}>
                
            </div>
        </div>
    )
}