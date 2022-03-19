

export default function Home() {
	return (<>
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
									{/* <Image src={icon} width="50" height="50" /> */}
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
									{/* <Image src={flag} width="50" height="35" /> */}
								</td>
							</tr>
							<tr id="cvidon">
								<td>1</td>
								<td>
									{/* <Image src={icon} width="50" height="50" /> */}
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
									{/* <Image src={flag} width="50" height="35" /> */}
								</td>
							</tr>
							<tr id="cvidon">
								<td>1</td>
								<td>
									{/* <Image src={icon} width="50" height="50" /> */}
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
									{/* <Image src={flag} width="50" height="35" /> */}
								</td>
							</tr>
							<tr id="brmasser">
								<td>2</td>
								<td>
									{/* <Image src={icon} width="50" height="50" /> */}
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
									{/* <Image src={flag} width="50" height="35" /> */}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
	</>)
}