import { use42 } from "libs/fetch";
import Link from "next/link";
import { Fragment } from "react";

const logins = [
	"hgicquel",
	"brmasser",
	"abfall",
	"cvidon",
	"lkhamlac",
	"vpiamias"
]

interface Profile {
	id: number,
	login: string
}

function _Profile(props: {
	profile: Profile
}) {
	const { profile } = props

	return <Link href={`/user/${profile.login}`} passHref>
		<a className="p-2 flex border border-contrast rounded-xl mb-2">
			{/* <img src={} /> */}
			{profile.login}
		</a>
	</Link>
}

export default function Home() {
	const	users = use42<Profile[]>(`/v2/users?filter[login]=${logins.join(',')}`)

	return (<>
		{users?.map(user =>
			<Fragment key={user.id}>
				<_Profile profile={user} />
			</Fragment>)}
	</>)
}