import type { NextPage } from "next"
import Image from "next/image"
import React, { ChangeEvent, useCallback, useState } from "react"
import icon from "../public/assets/boredape.png"
import flag from "../public/assets/flag.png"
import logo from "../public/assets/fusee.png"

const Home: NextPage = () => {
	const [search, setSearch] = useState<string>()

	const updateSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}, [])

	return (
		<div className="p-4 h-full ">
			<div className="h-32" />
			<div className="w-full max-w-xl m-auto">
				<nav className="flex items-center justify-between flex-wrap bg-blue-800 p-6">
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<Image src={logo} width="100" height="50" />

						<span className="font-semibold text-xl tracking-tight">
							Chad3.io
						</span>
					</div>
					<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
						<div className="text-sm lg:flex-grow">
							<a
								href="#responsive-header"
								className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
								Test1
							</a>
							<a
								href="#responsive-header"
								className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
								Test2
							</a>
						</div>
						<div>
							<a
								href="#"
								className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
								Espace Candidat
							</a>
						</div>
					</div>
				</nav>

				<div className="w-full">
					<input
						className="w-full bg-contrast rounded-xl p-4"
						placeholder="Rechercher un profil"
						value={search}
						onChange={updateSearch}
					/>
				</div>

				<div className=" rounded-lg inline-block w-full mr-6 ">
					<span className="font-semibold text-xl tracking-tight ">Ranking</span>
					<table className="titre">
						<thead>
							<tr>
								<th scope="col"> Position</th>
								<th scope="col"> Pic </th>
								<th scope="col"> Name </th>
								<th scope="col"> Level </th>
								<th scope="col"> Link </th>
								<th scope="col"> Country </th>
							</tr>
						</thead>
						<tbody className="row">
							<tr id="cvidon">
								<td>1</td>
								<td>
									<Image src={icon} width="50" height="50" />
								</td>
								<td> cvidon </td>
								<td> 9.7% </td>
								<td>
									{" "}
									<a href="https://profile.intra.42.fr/users/cvidon">
										{" "}
										Link{" "}
									</a>{" "}
								</td>
								<td>
									<Image src={flag} width="50" height="35" />
								</td>
							</tr>
							<tr id="cvidon">
								<td>1</td>
								<td>
									<Image src={icon} width="50" height="50" />
								</td>
								<td> cvidon </td>
								<td> 9.7% </td>
								<td>
									{" "}
									<a href="https://profile.intra.42.fr/users/cvidon">
										{" "}
										Link{" "}
									</a>{" "}
								</td>
								<td>
									<Image src={flag} width="50" height="35" />
								</td>
							</tr>
							<tr id="cvidon">
								<td>1</td>
								<td>
									<Image src={icon} width="50" height="50" />
								</td>
								<td> cvidon </td>
								<td> 9.7% </td>
								<td>
									{" "}
									<a href="https://profile.intra.42.fr/users/cvidon">
										{" "}
										Link{" "}
									</a>{" "}
								</td>
								<td>
									<Image src={flag} width="50" height="35" />
								</td>
							</tr>
							<tr id="brmasser">
								<td>2</td>
								<td>
									<Image src={icon} width="50" height="50" />
								</td>
								<td> brmasser </td>
								<td> 8.7% </td>
								<td>
									{" "}
									<a href="https://profile.intra.42.fr/users/brmasser">
										{" "}
										Link{" "}
									</a>{" "}
								</td>
								<td>
									<Image src={flag} width="50" height="35" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Home
