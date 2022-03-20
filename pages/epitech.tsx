import { use42 } from "libs/fetch";
import Link from "next/link";
import { Fragment } from "react";

// TODO:: quand on clique sur epitech et scien po page vide
// TODO :: cacher logo linkedin et github sur page classement

const logins = [
	"vpiamias",
]

interface Profile {
	id: number,
	login: string,
	first_name: string,
	last_name: string
}

function _Profile(props: {
	index: number,
	profile: Profile
}) {
	const { index, profile } = props

return <Link href={`/user/${profile.login}`} passHref>
		<a className="text-4xl">
				Epitech is coming soon...
		</a>
	</Link>
}

export default function Home() {
	const	users = use42<Profile[]>(`/v2/users?filter[login]=${logins.join(',')}`)

	return (<>
		{users?.map((user, i) =>
			<Fragment key={user.id}>
				<_Profile 
					index={i}
					profile={user} />
			</Fragment>)}
	</>)
}