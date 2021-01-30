
import { Link } from 'react-router-dom';

export const showAccount = ({ children, row, style }) => {
    return <>
        {children.platform} - {children.tradingAccountId}
    </>
}

export const gateway = ({ children, row, style }) => {
    return <>
        {children === 'WIRE_TRANSFER' && 'Wire Transfer'}
        {children !== 'WIRE_TRANSFER' && children}
    </>
}

export const customerPageLink = ({ children, row, style }) => {
    return <Link className="column-link" style={{ padding: '0px' }}
        to={'/leads/' + row._id}
    >{children}</Link>
}


export const customerLinkPopulate = ({ children, row, style }) => {
    console.log(children)
    return children && <Link className="column-link" style={{ padding: '0px' }}
        to={'/leads/' + children._id}
    >{children.firstName} {children.lastName}</Link>
}
