import React from 'react'
import { Link } from 'react-router-dom'

function ServiceTable() {
  return (
    <div className=' p-3 '>
      <div className="overflow-x-auto  rounded-md">
        <table className="table border-[3px] rounded-md p-1">
          {/* head */}
          <thead>
            <tr className='text-center'>
              <th>S.NO</th>
              <th>Name</th>
              <th>Address</th>
              <th>View</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className='hover text-center'>
              <th>1</th>
              <td className='font-bold'>Gym Name</td>
              <td className=''>Vazhoor Road, Kottayam </td>
              <td>
                <Link to="/admin/service/1">
                  <div className='btn btn-sm'>Preview</div>
                </Link>
              </td>
              <td>
                <div className='flex-col flex md:flex-row gap-2 justify-center'>
                  <button className="btn btn-ghost btn-sm bg-blue-500 text-white hover:bg-blue-600">Edit</button>
                  <button className="btn btn-ghost btn-sm bg-red-500 text-white hover:bg-red-600">Delete</button>
                </div>
              </td>
            </tr>
            {/* row 2 */}
            <tr className='hover text-center'>
              <th>2</th>
              <td className='font-bold'>Gym Name 2</td>
              <td className=''>Vazhoor Road, Kottayam 2</td>
              <td>
                <Link to="/admin/service/1">
                  <div className='btn btn-sm'>Preview</div>
                </Link>
              </td>
              <td>
                <div className='flex-col flex md:flex-row gap-2 justify-center'>
                  <button className="btn btn-ghost btn-sm bg-blue-500 text-white hover:bg-blue-600">Edit</button>
                  <button className="btn btn-ghost btn-sm bg-red-500 text-white hover:bg-red-600">Delete</button>
                </div>
              </td>
            </tr>

          </tbody>

        </table>
      </div>
    </div>
  )
}

export default ServiceTable