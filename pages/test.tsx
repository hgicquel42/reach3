import { use42 } from "libs/fetch"

export default function Test() {
	// const apps = useGET("/v2/apps", fetch42)
	const	exp = use42("/v2/users")
	const str = JSON.stringify(exp, null, 4)
	console.log(str)
	// console.log(exp.find(o => o.login === 'vpiamias'))

	return <div className="p-4 h-full"></div>
}
