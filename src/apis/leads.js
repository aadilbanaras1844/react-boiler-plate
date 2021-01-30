
import API from './caller';
const api = new API();

class Customer {
    getLeads = (params={}) => {
        return api.get('crm/leads', true)
    }
    deleteLead = (id) => {
        return api.delete('crm/leads/'+id, true)
    }
    addLead = (params) => {
        return api.post('crm/leads/', params, true)
    }
    updateLead = (id, params) => {
        return api.patch('crm/leads/'+id, params, true)
    }
}

export default new Customer();