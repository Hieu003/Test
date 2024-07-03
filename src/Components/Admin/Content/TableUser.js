import { useEffect, useState } from "react"
import { getListUser } from "../../Service/apiService";

const TableUser = () => {
    const [listUser, setListUser] = useState([

    ])


    useEffect(() => {
        fetchListUser()
    }, []);

    const fetchListUser = async () => {
        let res = await getListUser()
        if (res.data.EC === 0) {
            setListUser(res.data.DT)
        }
        console.log(res)
    }


    return (
        <>
            <table className="table  table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Email</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 && listUser.map((item, index) => {
                        return (
                            < tr key={`table-user-${index}`}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                            </tr>
                        )
                    }
                    )}

                    {listUser && listUser.length === 0 &&

                        <tr>
                            <td colSpan={4}>Not Found User</td>
                        </tr>}



                </tbody>
            </table >
        </>


    )
}

export default TableUser 