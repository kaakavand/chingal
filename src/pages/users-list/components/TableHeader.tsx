import React from 'react'

const TableHeader = () => {
  return (
    <thead className="text-xs text-surface-500 uppercase  bg-surface-100">
    <tr>
        <th scope="col" className="px-6 py-3 text-center border border-surface-300">
            نام کاربر
        </th>
        <th scope="col" className="px-6 py-3 text-center border border-surface-300">
            سن
        </th>
        <th scope="col" className="px-6 py-3 text-center border border-surface-300">
            شماره تلفن
        </th>
        <th scope="col" className="px-6 py-3 text-center border border-surface-300">
            آیمیل
        </th>
        <th scope="col" className="px-6 py-3 text-center border border-surface-300">
            آدرس
        </th>
        <th scope="col" className="px-6 py-3 text-center border border-surface-300">
            شرکت
        </th>
    </tr>
</thead>
  )
}

export default TableHeader