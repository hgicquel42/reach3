import { use42 } from "libs/fetch"

export default function Test() {
	// const apps = useGET("/v2/apps", fetch42)
	const	hgicquel = use42("/v2/users?filter[login]=hgicquel")
	const	brmasser = use42("/v2/users?filter[login]=brmasser")
	const	abfall = use42("/v2/users?filter[login]=abfall")
	const	cvidon = use42("/v2/users?filter[login]=cvidon")
	const	lkhamlac = use42("/v2/users?filter[login]=lkhamlac")
	const	vpiamias = use42("/v2/users?filter[login]=vpiamias")
	const str = JSON.stringify(hgicquel, null, 4)
	console.log(str)
	// console.log(exp.find(o => o.login === 'vpiamias'))

	return <div className="p-4 h-full">
		{JSON.stringify(str)}
	</div>
}
