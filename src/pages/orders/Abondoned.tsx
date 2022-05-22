import { DotsVerticalIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import MainLayout from '../../layout/MainLayout/MainLayout';



function Abondoned({products}:any){


	
	const columns = [
		{
			name: "Product Name",
			selector: (row:any)  => row.title,
		},
		{
			name: "Product Category",
			selector: (row:any) => (
				<div
					className={
						row.category === "men's clothing"
							? "status active"
							: row.category === "jewelery"
							? "status draft"
							: "status archived"
					}
				>
				
					<span> {row.category} </span>
				</div>
			),
		},
		{
			name: "Price",
			selector: (row:any)  => row.price
		},
		{
			name: "Description",
			selector: (row:any)  => row.description
		},
		{
			name: "Product Image",
			selector: (row:any)  => (
				<img src={row.image} width={100} height={80} alt="" />
			),
		},
	];
	

	
	return (
	<MainLayout title="OrderList">
		<div className='p-5'>
	    	<DataTable columns={columns} data={products} pagination selectableRows fixedHeader />
		</div>
	</MainLayout>	
	)
}

export default Abondoned

export async function getServerSideProps(context:any) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
    products,
  }}
}