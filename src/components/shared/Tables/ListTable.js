import React from 'react';
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Spinner } from 'react-bootstrap';

const ListTable = (props) => {
  const { headers = [], data } = props;

  const deleteClick = (row) => {
    confirmAlert({
      title: 'Confirm...!!!',
      message: 'Are you sure to delete this ??',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            if (props.deleteHandler) {
              props.deleteHandler(row._id)
            }
          }
        },
        {
          label: 'No',
          onClick: () => false
        }
      ]
    });
  };

  return (
    <>
      <Table striped bordered hover className="listing-table">
        <thead>
          <tr>
            <th>#</th>
            {headers.map(obj =>
              <th>
                {obj.display}
              </th>
            )}
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.loading &&
            <tr style={{ height: '10rem' }}>
              <td colSpan={headers.length + 3} className="text-center" style={{ verticalAlign: 'middle' }}>
                <Spinner animation="border" />
              </td>
            </tr>
          }
          {!props.loading && data.length === 0 && <tr style={{ height: '10rem' }}>
            <td colSpan={headers.length + 3} className="text-center" style={{ verticalAlign: 'middle' }}>
              No Records...!!!
            </td>
          </tr>}
          {!props.loading && data.map((row, index) =>
            <tr>
              <td>{index + 1}</td>
              {headers.map(obj =>
                <>
                  {!obj.component &&
                    <td>
                      {obj.type &&
                        (
                          obj.type === Boolean
                          && (row[obj.name] === true ? 'Yes' : 'No')
                        )
                        ||
                        (
                          obj.type === Date
                          && new Date(row[obj.name]).toUTCString()
                        )



                      }
                      {!obj.type && !obj.component && row[obj.name]}
                    </td>
                  }

                  {obj.component &&
                    <td>
                      <obj.component row={row}>{row[obj.name]}</obj.component>
                    </td>
                  }


                </>

              )}
              <td className="actions">
                {props.editHandler &&
                  <FontAwesomeIcon role="button" icon={faPencilAlt} onClick={() => { props.editHandler(row) }} />
                }
                {props.deleteHandler &&
                  <FontAwesomeIcon role="button" onClick={() => { deleteClick(row) }} icon={faTrash} />
                }
                {props.actionHandlers &&
                  <>
                    {props.actionHandlers.map(obj => <>
                      {obj.component(row)}
                    </>)}
                  </>
                }
                {/* <FontAwesomeIcon role="button" icon={faCheckCircle} />
                <FontAwesomeIcon role="button" icon={faTimesCircle} /> */}

              </td>
            </tr>
          )}

        </tbody>
      </Table>
    </>
  );
}

export default ListTable;

