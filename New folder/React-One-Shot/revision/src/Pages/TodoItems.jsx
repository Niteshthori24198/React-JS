import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { deleteTodos, getTodos, updateTodos } from '../Redux/action';


import { useSearchParams } from 'react-router-dom'

function TodoItems() {


    const [isupdated, setisupdated] = React.useState(false)

    const [searchParams, setSearchParams] = useSearchParams()

    const [page, setpage] = React.useState(+searchParams.getAll('page') || 1);

    const [limit, setlimit] = React.useState(+searchParams.getAll('limit') || 3);

    const [searchinpval, setsearchinpval] = React.useState(searchParams.getAll('title') || '');



    const state = useSelector((state) => {
        return {
            isloading: state.todoReducer.isloading,
            iserror: state.todoReducer.iserror,
            error: state.todoReducer.error,
            todos: state.todoReducer.todos,
            totalTaskcount: state.todoReducer.totalTaskcount
        }
    }, shallowEqual);

    

    const { isloading, iserror, todos, error, totalTaskcount } = state;


    const Dispatch = useDispatch()

    React.useEffect(() => {

        let params = {
            _page: page,
            _limit: (limit === 0 ? 3 : limit)
        }

        if (searchinpval) {

            params['q'] = searchinpval;
        }
       

        Dispatch(getTodos(params))

    }, [isupdated, page, limit, searchinpval])


    React.useEffect(() => {

        let params = {};

        params.page = page;

        params.limit = limit;

        if (searchinpval) {
            params.title = searchinpval;
        }

        setSearchParams(params)


    }, [page, limit, searchinpval])


    return (

        <>

            <div>
                <input type="text" placeholder='search here by task name' name="search" value={searchinpval} onChange={(e) => setsearchinpval(e.target.value)} />
            </div>

            <div>

                {

                    isloading ? <div>Loading data for you ..........</div> : iserror ? <div>{error}</div> : <Display todos={todos} isupdated={isupdated} setisupdated={setisupdated} />


                }

            </div>

            <div style={{ margin: "40px auto", width: "30%" }}>

                <div>
                    <select onChange={(e) => setlimit(+e.target.value)}>
                        <option selected={+limit === 0} value="0">Items per Page</option>
                        <option selected={+limit === 6} value="6">6</option>
                        <option selected={+limit === 10} value="10">10</option>
                        <option selected={+limit === 15} value="15">15</option>
                        <option selected={+limit === 20} value="20">20</option>

                    </select>
                </div>
                <div>
                    <button disabled={page <= 1 ? true : false} onClick={() => setpage((prev) => prev - 1)}>Prev</button>
                    <span>{page}</span>
                    <button disabled={((page * limit) >= totalTaskcount) ? true : false} onClick={() => setpage((prev) => prev + 1)}>Next</button>

                </div>


            </div>
        </>
    )
}

export default TodoItems




function Display({ todos, isupdated, setisupdated }) {

    const Dispatch = useDispatch()


    const handledelete = (id) => {

        Dispatch(deleteTodos(id))
        setisupdated(!isupdated)
    }

    const handletoggle = (id, status) => {
        const payload = {
            id,
            status: !status
        }
        Dispatch(updateTodos(payload))
        setisupdated(!isupdated)

    }


    return <div style={{ display: 'grid', gap: "15px", "gridTemplateColumns": "repeat(3,1fr)" }}>

        {
            todos.map((item) => {
                return <div key={item.id}>
                    <p>Task Name : - {item.title}</p>
                    <p>Author Name : - {item.author}</p>
                    <p>Status : - {item.status ? "Completed" : "Pending"}</p>
                    <button onClick={() => handletoggle(item.id, item.status)}>Toggle Status</button>
                    <button onClick={() => handledelete(item.id)}>Delete</button>
                    <Link to={`/Edit-Todo/${item.id}`}><button>Edit</button></Link>
                </div>
            })
        }

    </div>


}