import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

import { LeadActions } from 'store/actions';
import ListTable from 'components/shared/Tables/ListTable'
import { headers } from './helpers';


const { fetchLeads } = LeadActions;

const LeadList = (props) => {
  useEffect(() => {
    props.fetchLeads();
  }, [])

  const deleteHandler = (id) => {
    props.deleteCustomer(id);
  }
  const editHandler = () => {
    // const data = {
    //   _id : obj._id,
    //   firstName: obj.firstName,
    //   lastName: obj.lastName,
    //   countryOfResidence: obj.countryOfResidence,
    //   phone: obj.phone
    // }
    // setEditData(data);
  }
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item as={Link} href="/dashboard">Dashboard</Breadcrumb.Item>

        <Breadcrumb.Item active>Leads </Breadcrumb.Item>
      </Breadcrumb>
      <h3>
        Leads 
      </h3>

      <ListTable headers={headers}
        loading={props.LeadReducer.loadingList}
        data={props.LeadReducer.list && props.LeadReducer.list.docs || []}
        deleteHandler={deleteHandler} editHandler={editHandler} />


    </>
  );
}


const mapStateToProps = (state) => ({
  LeadReducer: state.LeadReducer,
});


export default connect(mapStateToProps, { fetchLeads })(LeadList);
