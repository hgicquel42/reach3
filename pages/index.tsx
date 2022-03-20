import { avatars } from "libs/avatars";
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
		<a className="flex border border-contrast rounded-xl mb-2 hover:border-black">
			<div className="p-4 text-5xl font-bold text-center w-20">
				{index+1}
			</div>
			<div className="border-r border-contrast"/>
			<div className="p-4 flex">
				<img className="w-12 h-12 rounded-full mr-4"
					src={avatars[profile.login]} />
				<div>
					<div>{profile.login}</div>
					<div className="text-contrast">
						{profile.first_name} {profile.last_name}
					</div>
				</div>
			</div>
		</a>
	</Link>
}



export default function Home() {
	const	users = use42<Profile[]>(`/v2/users?filter[login]=${logins.join(',')}`)

	if (!users)
		return <>Chargement...</>
	return (<>
		{users.map((user, i) =>
			<Fragment key={user.id}>
				<_Profile 
					index={i}
					profile={user} />
			</Fragment>)}
	</>)
}