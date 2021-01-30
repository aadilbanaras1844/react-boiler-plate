import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Collapse from 'react-bootstrap/Collapse';

import { Link } from 'react-router-dom';
export default function Sidebar() {
  const [showTransactions, setShowTransactions] = React.useState(false);
  const [showRequests, setShowRequests] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
    return (
      
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Start Bootstrap </div>
        <div className="list-group list-group-flush">
          
          <Link className="list-group-item list-group-item-action bg-light" to={'/dashboard'}>
            Dashboard
          </Link>

          <Link className="list-group-item list-group-item-action bg-light" to={'/clients'} > Clients </Link>
          <Link className="list-group-item list-group-item-action bg-light" to={'/leads'} > Leads </Link>
          <Link
            className="list-group-item list-group-item-action "
            onClick={() => setShowTransactions(!showTransactions)}
          >
            Transactions
            <FontAwesomeIcon className="float-right" style={{fontSize: '1rem'}} 
              icon={showTransactions?faArrowUp:faArrowDown}
            />

          </Link>
          <Collapse in={showTransactions}>
              <div className="sub-menue ">
                <Link className="list-group-item list-group-item-action  " to={'/transactions/deposit'}>
                  Deposit
                </Link>
                <Link className="list-group-item list-group-item-action  " to={'/transactions/withdraw'}>
                  Withdraw
                </Link>
                <Link className="list-group-item list-group-item-action  " to={'/transactions/internal-transfer'}>
                  Internal Transfer
                </Link>
              </div>
            </Collapse>
         
          <Link
            className="list-group-item list-group-item-action "
            onClick={() => setShowRequests(!showRequests)}
          >
            Requests
            <FontAwesomeIcon className="float-right" style={{fontSize: '1rem'}} 
              icon={showRequests?faArrowUp:faArrowDown}
            />

          </Link>
          <Collapse in={showRequests}>
              <div className="sub-menue ">
                <Link className="list-group-item list-group-item-action  " to={'/requests/new-account'}>
                  New  Account
                </Link>
                <Link className="list-group-item list-group-item-action  " to={'/requests/partnership'}>
                  Partnership
                </Link>
                <Link className="list-group-item list-group-item-action  " to={'/requests/change-leverage'}>
                  Change Leverage
                </Link>
              </div>
            </Collapse>

            <Link
            className="list-group-item list-group-item-action "
            onClick={() => setShowSettings(!showSettings)}
          >
            Settings
            <FontAwesomeIcon className="float-right" style={{fontSize: '1rem'}} 
              icon={showSettings?faArrowUp:faArrowDown}
            />

          </Link>
          <Collapse in={showSettings}>
              <div className="sub-menue ">
                <Link className="list-group-item list-group-item-action  " to={'/settings/users'}>
                  Users
                </Link>
                <Link className="list-group-item list-group-item-action  " to={'/settings/email-templates'}>
                  Email Templates
                </Link>
                <Link className="list-group-item list-group-item-action  " to={'/settings/roles'}>
                  Roles
                </Link>
                <Link className="list-group-item list-group-item-action  " to={'/settings/teams'}>
                  Teams
                </Link>
              </div>
            </Collapse>
        
          
          
        </div>
    </div>
    );
  }
  