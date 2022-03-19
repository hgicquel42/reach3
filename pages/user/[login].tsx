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
				<div className="text-right text-lg text-black">{profile.login}</div>
				<div className="text-contrast text-black font-sans font-bold text-2xl text-center">
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
	<ol className="relative border-l border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ml-6">            
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-black">Minishell <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">As beautiful as shell.</p>
        <a href="" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg> NFT Link or smth</a>
    </li>
    <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-black">Philosophers</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">P_thread, mutex and data races to make your life brighter</p>
    </li>
    <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-black">Ft_containers</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Binary tree and a lot of coffee</p>
    </li>
</ol>
	



	<div className="border border-contrast rounded-xl mb-2 text-center space-y-2 object-scale-down">
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