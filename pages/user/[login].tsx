import { avatars } from "libs/avatars";
import { use42 } from "libs/fetch";
import { useRouter } from "next/router";

interface Profile {
	id: number,
	login: string,
	first_name: string,
	last_name: string
}

function _Profile(props: {
	profile: Profile
}) {
	const { profile } = props

	return <a className="flex border border-contrast rounded-xl mb-2">
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
}

function _Page(props: {
	login: string
}) {
	const { login } = props

	const	users = use42<Profile[]>(`/v2/users?filter[login]=${login}`)
	const profile = users?.[0]

	if (!profile)
		return <>Loading...</>

	return <_Profile profile={profile} />
}

export default function Profile() {
  const router = useRouter()
	const { login } = router.query
	
	if (typeof login !== "string")
		return null
	return <_Page login={login} />
}