import { avatars } from "libs/avatars";
import { use42 } from "libs/fetch";
import { useRouter } from "next/router";

interface Profile {
	id: number,
	login: string,
	first_name: string,
	last_name: string
}

interface Project {
	name: string
	grade: number
}


function _Header(props: {
	profile: Profile
}) {
	const { profile } = props

	return <header className="flex border border-contrast rounded-xl  mb-2">
		<div className="p-4 flex grow">
			<img className="w-28 h-28 rounded-full mx-8"
				src={avatars[profile.login]} />
				<div className="grow"/>
				<div className= " py-8 ">
				<div className="text-right text-lg text-white">{profile.login}</div>
				<div className="text-contrast text-white font-sans font-bold text-2xl text-center">
					{profile.first_name} {profile.last_name}
				</div>
			</div>
		</div>
	</header>
}

function _Project(props: {
	project: Project
}) {
	const { project } = props

	return <>
		<div>
			{project.name}
		</div>
	</>
}

function _Projects(props: {
	profile: Profile
}) {
	// ...

	return <>
	<div className="border border-contrast rounded-xl mb-2 text-center space-y-2">
		<_Project project={{name: "minishell", grade: 100}} />
		<_Project project={{name: "philo", grade: 100}} />
	</div>

	
	</>
}

function _Page(props: {
	login: string
}) {
	const { login } = props

	const	users = use42<Profile[]>(`/v2/users?filter[login]=${login}`)
	const profile = users?.[0]

	if (!profile)
		return <>Loading...</>

	return <>
		<_Header profile={profile} />
		<_Projects profile={profile} />
	</>
}

export default function Profile() {
  const router = useRouter()
	const { login } = router.query
	
	if (typeof login !== "string")
		return null
	return <_Page login={login} />
}