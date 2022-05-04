import React from 'react';
import { useState,useEffect } from 'react';

export const TableLayout = () => {

    
  const [list, setList] = useState([]);
  const [newData, setNewData] = useState();
  const addDataList = () => {
    setList([...list,newData]);
  }
  const  getValues = (e) => {
    setNewData(e.target.value);
  }



    const [newname, setNewName] = useState();
    const [newLname, setnewLname] = useState();

    const [tableData, settableData] = useState([]);
    const updateData = () => {
    
    settableData([...tableData,
        {
            Name: newname,
            Last: newLname,
          
          
        }

    ]
       )   

    }
    const  removeRow = (index) => {
       // alert(i);
        const rowGet = [...tableData];
        rowGet.splice(index,1);
        settableData(rowGet);


    }

    // useEffect(() => {
    //     return () => {
    //         removeRow()
    //     };
    // }, [])

   

    const  getName = (e) => {
        setNewName(e.target.value);
    }

    const  getLname = (e) => {
        setnewLname(e.target.value);
    }
    
 
  

  return (
    <>
    
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Table</h2>
      
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
          <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Role</th>
                </tr>
            </thead>
            <tbody>
                
            {tableData.map((tableDataItem,index) => (
                <tr>
                <td key={index}>{index+1}</td>
                <th scope="row">{tableDataItem.Name}</th>
                <td>{tableDataItem.Last}</td>
                <button onClick={() => removeRow(index)}>Remove Row</button>
                <td>

                </td>
                </tr>
            ))
        }
            
            </tbody>
            </table>
            {newname}
            <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text"  class="form-control"  onChange={(e) => getName(e)} value={newname}  id="fname" aria-describedby="fname" placeholder="Enter name" name='fname' />
                
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input type="text" value={newLname}  class="form-control" onChange={(e) => getLname(e)} name='lastName' id="lastName" aria-describedby="lastName" placeholder="Enter last name" />
                
                </div>

                
                
                <button type="button" onClick={updateData} class="btn btn-primary">Submit</button>
            </form>
           </div>
          </div>
        </div>
      </div>
     


{list.map((item) => (
<li>{item}</li>
))
}
<br></br>
<input type="text" class="form-control" onChange={getValues}  id="fname" aria-describedby="lastName" placeholder="Enter name" name='fname' />
<button onClick={addDataList}>add list</button>
   newadd: {newData}
    </div>
    </>
  )
}
