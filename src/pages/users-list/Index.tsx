import React from 'react'
import Layout from '../../core/Layout'
import TableHeader from './components/TableHeader'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { getAge } from '../../functions/getAge'

interface userType {
    dateOfBirth : string,
    name : string,
    phoneNumber : string,
    email : string,
    street : string,
    company : string
}

const Index = () => {

    const queryClient = useQueryClient()
    const {data} = useQuery({ queryKey: ['todos'], queryFn: () =>  axios.get("https://63c2988fe3abfa59bdaf89f6.mockapi.io/users") })
    
  return (
    <Layout>
      
<div className="relative mt-4">
    <table className="w-full bg-surface-300 border rounded-xl overflow-hidden border-surface-300 text-sm text-right text-surface-900">
       <TableHeader/>
        <tbody>
            {
                data?.data.map((el : userType) => 
                    <tr className="odd:bg-surface-200 even:bg-surface-100">
                    <td className="p-6 text-center border border-surface-300">
                        {el.name}
                    </td>
                    <td className="p-6 text-center border border-surface-300">
                        {getAge(el.dateOfBirth)}
                    </td>
                    <td className="p-6 text-center border border-surface-300">
                        {el.phoneNumber}
                    </td>
                    <td className="p-6 text-center border border-surface-300">
                        {el.email}
                    </td>
                    <td className="p-6 text-center border border-surface-300">
                        {el.street}
                    </td>
                    <td className="p-6 text-center border border-surface-300">
                        {el.company}
                    </td>
                </tr>
                    )
            }
       
        </tbody>
    </table>
</div>
    </Layout>
  )
}

export default Index