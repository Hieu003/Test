import { useEffect, useState } from "react"
import { getListUser } from "../../Service/apiService";

const TableUser = (props) => {
    const { listUser } = props





    return (
        <>
            <table className="table  table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Email</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 && listUser.map((item, index) => {
                        return (
                            < tr key={`table-user-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-secondary">View</button>
                                    <button className="btn btn-success">Update</button>
                                    <button className="btn btn-warning">Delete</button>
                                </td>
                            </tr>
                        )
                    }
                    )}

                    {listUser && listUser.length === 0 &&

                        <tr>
                            <td colSpan={5}>Not Found User</td>
                        </tr>}



                </tbody>
            </table >
        </>


    )
}

export default TableUser 