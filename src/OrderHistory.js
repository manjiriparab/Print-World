import React, {Component} from 'react';
import Header from './header';
import Layout from './layout';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, p_type, c_type, size, quantity, address, status) {
    return { name, p_type, c_type, size, quantity, address, status };
}

const rows = [
    createData('Company Card', 'matte', 'standard', '55x55', '10,000', 'Mumbai', 'pending'),
    createData('Party Card', 'glossy', 'rounded', '90x50','100', 'Goa', 'completed'),
    createData('School Id Card', 'matte', 'standard', '85x55', '600', 'Mumbai', 'pending'),
];

export default class OrderHistory extends Component {

    constructor(props) {
        super(props);
        
    }
    render() {
        
        return (
            <div>
                <Header/>
                <div className="sidebar">
                    <Layout/>
                </div>
                <div className="main">
                    <h1>Order History</h1>
                <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Job Name</TableCell>
                                <TableCell align="right">Paper Type</TableCell>
                                <TableCell align="right">Corners</TableCell>
                                <TableCell align="right">Size</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Address</TableCell>
                                <TableCell align="right">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell >{row.name}</TableCell>
                            <TableCell align="right">{row.p_type}</TableCell>
                            <TableCell align="right">{row.c_type}</TableCell>
                            <TableCell align="right">{row.size}</TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.address}</TableCell>
                            <TableCell className={row.status} align="right">{row.status}</TableCell>
                        </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </div>
            </div>
        );
    }
}