
import { customerPageLink } from 'utils'

export const headers = [{
    name: 'firstName',
    display: 'First Name',
    component: customerPageLink
},{
    name: 'lastName',
    display: 'Last Name',
    component: customerPageLink
},{
    name: 'createdAt',
    display: 'Creation Date',
    type: Date
},{
    name: 'isActive',
    display: 'Is Active',
    type: Boolean
},{
    name: 'isDeleted',
    display: 'Is Deleted',
    type: Boolean
}]