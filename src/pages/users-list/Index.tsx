import React from 'react'
import Layout from '../../core/Layout'
import TableHeader from './components/TableHeader'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
const Index = () => {

    const queryClient = useQueryClient()
    const {data} = useQuery({ queryKey: ['todos'], queryFn: () =>  axios.get("https://63c2988fe3abfa59bdaf89f6.mockapi.io/users") })

    console.log(data);
    
  return (
    <Layout>
      
<div className="relative mt-4">
    <table className="w-full bg-surface-300 border rounded-xl overflow-hidden border-surface-300 text-sm text-right text-surface-900">
       <TableHeader/>
        <tbody>
            {
                data?.data.map((el : any) => 
                    <tr className="bg-surface-200 ">
                    <td className="px-6 py-4 border border-surface-300">
                        {el.name}
                    </td>
                    <td className="px-6 text-center py-4 border border-surface-300">
                        Silver
                    </td>
                    <td className="px-6 text-center py-4 border border-surface-300">
                        {el.phoneNumber}
                    </td>
                    <td className="px-6 text-center py-4 border border-surface-300">
                        {el.email}
                    </td>
                    <td className="px-6 text-center py-4 border border-surface-300">
                        {el.street}
                    </td>
                    <td className="px-6 text-center py-4 border border-surface-300">
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